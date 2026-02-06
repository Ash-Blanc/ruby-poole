<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const testimonials = [
  {
    name: 'Sarah & Michael Johnson',
    location: 'Rogers, AR',
    rating: 5,
    text: 'Ruby and her team made our first home buying experience absolutely seamless. They were patient, knowledgeable, and always available to answer our questions.',
    avatar: 'SJ',
  },
  {
    name: 'David Thompson',
    location: 'Bentonville, AR',
    rating: 5,
    text: 'Sold our home in just 10 days above asking price! The marketing strategy and staging advice were game-changers. Highly recommend the Ruby Poole Team.',
    avatar: 'DT',
  },
  {
    name: 'Emily Rodriguez',
    location: 'Fayetteville, AR',
    rating: 5,
    text: 'After relocating from Texas, the team helped us find the perfect neighborhood for our family. They really took time to understand what we needed.',
    avatar: 'ER',
  },
  {
    name: 'James & Lisa Chen',
    location: 'Springdale, AR',
    rating: 5,
    text: 'We\'ve worked with Ruby on three property purchases now. Their market knowledge and negotiation skills have saved us thousands. True professionals!',
    avatar: 'JC',
  },
]

const currentIndex = ref(0)
let interval: ReturnType<typeof setInterval>

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}

const goTo = (index: number) => {
  currentIndex.value = index
}

onMounted(() => {
  interval = setInterval(next, 6000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <section class="bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5">
    <div class="container-custom">
      <div class="section-header">
        <h2>Client Stories</h2>
        <p>What our clients say about working with the Ruby Poole Team</p>
      </div>

      <div class="relative max-w-4xl mx-auto">
        <!-- Navigation Arrows -->
        <button
          @click="prev"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 btn btn-circle btn-ghost btn-sm lg:btn-md z-10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft class="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
        <button
          @click="next"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 btn btn-circle btn-ghost btn-sm lg:btn-md z-10"
          aria-label="Next testimonial"
        >
          <ChevronRight class="w-5 h-5 lg:w-6 lg:h-6" />
        </button>

        <!-- Testimonial Card -->
        <div class="overflow-hidden">
          <TransitionGroup
            enter-active-class="transition-all duration-500 ease-out"
            enter-from-class="opacity-0 translate-x-8"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition-all duration-300 ease-in absolute"
            leave-from-class="opacity-100 translate-x-0"
            leave-to-class="opacity-0 -translate-x-8"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.name"
              v-show="index === currentIndex"
              class="bg-base-100 rounded-2xl p-8 lg:p-12 shadow-lg"
            >
              <Quote class="w-10 h-10 text-primary/30 mb-6" />
              
              <p class="text-lg lg:text-xl text-base-content/80 leading-relaxed mb-8">
                "{{ testimonial.text }}"
              </p>

              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                  {{ testimonial.avatar }}
                </div>
                <div>
                  <div class="font-display text-lg">{{ testimonial.name }}</div>
                  <div class="text-sm text-base-content/60">{{ testimonial.location }}</div>
                </div>
                <div class="ml-auto flex gap-0.5">
                  <Star
                    v-for="i in testimonial.rating"
                    :key="i"
                    class="w-5 h-5 text-warning fill-warning"
                  />
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>

        <!-- Dots -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="goTo(index)"
            class="w-2.5 h-2.5 rounded-full transition-all"
            :class="index === currentIndex ? 'bg-primary w-8' : 'bg-base-300 hover:bg-base-content/30'"
            :aria-label="`Go to testimonial ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>
