<script setup lang="ts">
import { ref } from 'vue'
import {
    Phone, Mail, MapPin, Clock, Send, Facebook, Linkedin, ExternalLink
} from 'lucide-vue-next'
import stephanieImg from '@/assets/logos/StephanieBevardBio.jpg'
import brandonImg from '@/assets/logos/BB-Head.jpg'
import mattImg from '@/assets/logos/MattHarrisBio (2).jpg'

const form = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
    isSubmitting.value = true
    try {
        const formData = {
            ...form.value,
            source: 'contact-page',
            timestamp: new Date().toISOString(),
        }

        const response = await fetch('https://formspree.io/f/xeelpbna', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (!response.ok) throw new Error('Form submission failed')

        form.value = { name: '', email: '', phone: '', message: '' }
        alert('Thank you! We\'ll be in touch soon.')
    } catch (error) {
        console.error('Contact form error:', error)
        alert('Something went wrong. Please try again or call us directly.')
    } finally {
        isSubmitting.value = false
    }
}

const contactInfo = [
    { icon: Phone, label: 'Phone', value: '(479) 555-0123', href: 'tel:+14795550123' },
    { icon: Mail, label: 'Email', value: 'hello@rubypoole.com', href: 'mailto:hello@rubypoole.com' },
    { icon: MapPin, label: 'Office', value: '123 Main St, Rogers, AR 72756', href: 'https://maps.google.com/?q=123+Main+St,+Rogers,+AR+72756' },
    { icon: Clock, label: 'Hours', value: 'Mon-Sat: 9AM-6PM', href: null },
]

const socials = [
    { icon: Facebook, svgPath: null, href: 'https://www.facebook.com/ruby.n.poole', label: 'Facebook' },
    { icon: null, svgPath: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', href: 'https://twitter.com/RubyNWA', label: 'X (Twitter)' },
    { icon: Linkedin, svgPath: null, href: 'https://www.linkedin.com/in/ruby-poole-90296699', label: 'LinkedIn' },
]

const lenders = [
    {
        name: 'Stephanie Bevard',
        title: 'Loan Officer',
        email: 'stephanie@firstcolonymortgage.com',
        phone: '801-361-7433',
        nmls: 'NMLS#20250 | AZ LO-1026616',
        applyLink: 'https://mortgageme.firstcolonymortgage.com/homehub/signup/stephanie@firstcolonymortgage.com?from_mobile_share=true',
        photo: stephanieImg
    },
    {
        name: 'Brandon Bevard',
        title: 'Loan Officer',
        email: 'brandonb@firstcolonymortgage.com',
        phone: '801-361-6034',
        nmls: 'NMLS#1705172',
        applyLink: 'https://mortgageme.firstcolonymortgage.com/homehub/signup/brandonb@firstcolonymortgage.com?from_mobile_share=true',
        photo: brandonImg
    },
    {
        name: 'Matt Harris',
        title: 'Loan Officer',
        email: 'matth@firstcolonymortgage.com',
        phone: '530-306-2447',
        nmls: 'NMLS#218374',
        applyLink: 'https://mortgageme.firstcolonymortgage.com/homehub/signup/matth@firstcolonymortgage.com',
        photo: mattImg
    }
]
</script>

<template>
    <section id="contact" class="bg-gradient-to-br from-neutral via-neutral to-neutral/95 text-neutral-content">
        <div class="container-custom">
            <div class="section-header">
                <h2 class="text-neutral-content">Let's Connect</h2>
                <p class="text-neutral-content/70">Ready to start your real estate journey? Get in touch today.</p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
                <!-- Contact Form -->
                <div class="bg-base-100 text-base-content rounded-2xl p-8 lg:p-10 shadow-xl">
                    <h3 class="text-2xl font-display mb-6">Send a Message</h3>

                    <form @submit.prevent="handleSubmit" class="space-y-5">
                        <div class="form-control">
                            <label class="label pb-1">
                                <span class="label-text font-medium">Full Name</span>
                            </label>
                            <input v-model="form.name" type="text" placeholder="John Smith"
                                class="input input-bordered w-full" required />
                        </div>

                        <div class="grid sm:grid-cols-2 gap-5">
                            <div class="form-control">
                                <label class="label pb-1">
                                    <span class="label-text font-medium">Email</span>
                                </label>
                                <input v-model="form.email" type="email" placeholder="john@example.com"
                                    class="input input-bordered w-full" required />
                            </div>
                            <div class="form-control">
                                <label class="label pb-1">
                                    <span class="label-text font-medium">Phone</span>
                                </label>
                                <input v-model="form.phone" type="tel" placeholder="(555) 123-4567"
                                    class="input input-bordered w-full" />
                            </div>
                        </div>

                        <div class="form-control">
                            <label class="label pb-1">
                                <span class="label-text font-medium">Message</span>
                            </label>
                            <textarea v-model="form.message" placeholder="Tell us about your real estate needs..."
                                class="textarea textarea-bordered w-full h-32" required></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary w-full gap-2" :class="{ loading: isSubmitting }"
                            :disabled="isSubmitting">
                            <Send class="w-4 h-4" />
                            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                        </button>
                    </form>
                </div>

                <!-- Contact Info -->
                <div class="flex flex-col justify-center">
                    <div class="space-y-6 mb-10">
                        <div v-for="info in contactInfo" :key="info.label" class="flex items-start gap-4">
                            <div
                                class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <component :is="info.icon" class="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <div class="text-sm text-neutral-content/60 mb-0.5">{{ info.label }}</div>
                                <a v-if="info.href" :href="info.href"
                                    class="text-lg hover:text-primary transition-colors">
                                    {{ info.value }}
                                </a>
                                <span v-else class="text-lg">{{ info.value }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Social Links -->
                    <div>
                        <div class="text-sm text-neutral-content/60 mb-4">Follow Us</div>
                        <div class="flex gap-3">
                            <a v-for="social in socials" :key="social.label" :href="social.href"
                                :aria-label="social.label"
                                class="w-11 h-11 rounded-xl bg-neutral-content/10 hover:bg-primary hover:text-primary-content flex items-center justify-center transition-colors">
                                <component v-if="social.icon" :is="social.icon" class="w-5 h-5" />
                                <svg v-else-if="social.svgPath" viewBox="0 0 24 24" class="w-5 h-5 fill-current">
                                    <path :d="social.svgPath" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lending Partners -->
            <div class="mt-24 border-t border-neutral-content/10 pt-16">
                <div class="section-header text-center mb-12">
                    <h2 class="text-3xl font-display text-neutral-content">Our Financing Partners</h2>
                    <p class="text-neutral-content/70 mt-3 max-w-2xl mx-auto">Get pre-approved today or reach out for a
                        consultation with our trusted First Colony Mortgage lenders.</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div v-for="lender in lenders" :key="lender.name"
                        class="bg-base-100/5 backdrop-blur-sm rounded-2xl p-6 border border-neutral-content/10 flex flex-col h-full">
                        <div class="flex items-center gap-4 mb-4">
                            <img :src="lender.photo" :alt="lender.name"
                                class="w-16 h-16 rounded-full object-cover shadow-md" />
                            <div>
                                <h3 class="text-xl font-display text-neutral-content">{{ lender.name }}</h3>
                                <p class="text-primary text-sm font-medium">{{ lender.title }}</p>
                                <p class="text-neutral-content/50 text-xs mt-0.5">{{ lender.nmls }}</p>
                            </div>
                        </div>

                        <div class="space-y-3 mb-6 flex-grow">
                            <a :href="`tel:${lender.phone}`"
                                class="flex items-center gap-3 text-neutral-content/80 hover:text-primary transition-colors text-sm">
                                <Phone class="w-4 h-4 text-primary" />
                                {{ lender.phone }}
                            </a>
                            <a :href="`mailto:${lender.email}`"
                                class="flex items-center gap-3 text-neutral-content/80 hover:text-primary transition-colors text-sm break-all">
                                <Mail class="w-4 h-4 text-primary" />
                                {{ lender.email }}
                            </a>
                        </div>

                        <a :href="lender.applyLink" target="_blank" rel="noopener noreferrer"
                            class="btn btn-primary w-full gap-2 mt-auto text-base-content border-none">
                            Apply Now
                            <ExternalLink class="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
