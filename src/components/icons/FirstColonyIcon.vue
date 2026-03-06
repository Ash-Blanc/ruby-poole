<script setup lang="ts">
import { defineComponent } from 'vue'
</script>

<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    fill="currentColor"
    :class="$attrs.class"
  >
    <defs>
      <path id="one" d="M -0.5 35 V 82 H -7.5 V 50 Q -10 50 -14 53 L -14 43 Q -10 39 -0.5 35 Z" />
    </defs>
    <!-- Roof Top -->
    <polygon points="50,4 0,28 0,33 100,33 100,28" />
    <!-- Roof Bottom Bar -->
    <rect x="5" y="36" width="90" height="3" />
    <!-- Pillars -->
    <use href="#one" x="20" y="0" />
    <use href="#one" x="35" y="0" />
    <use href="#one" x="50" y="0" />
    <use href="#one" x="65" y="0" />
    <use href="#one" x="80" y="0" />
    <!-- Base Top Bar -->
    <rect x="5" y="85" width="90" height="3" />
    <!-- Base Bottom -->
    <polygon points="0,91 100,91 100,96 50,104 0,96" />
  </svg>
</template>
