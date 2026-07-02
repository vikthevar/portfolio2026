<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ScrambleText from '@/components/ScrambleText.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import { siteConfig } from '@/content/site'
</script>

<template>
  <DefaultLayout>
    <!-- Intro Section -->
    <section class="mb-16">
      <h1 class="text-2xl mb-4">
        Hey 👋, I'm <ScrambleText :texts="[siteConfig.fullName, siteConfig.shortName]" />
      </h1>
      <p class="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
        {{ siteConfig.about }}
      </p>
    </section>

    <!-- Social Links -->
    <section class="mb-16">
      <p class="text-xs text-gray-500 mb-3">Also on:</p>
      <SocialLinks :links="siteConfig.social" />
    </section>

    <!-- Connect Section -->
    <section>
      <h2 class="text-sm font-medium text-gray-400 mb-3">Let's Connect</h2>
      <p class="text-sm text-gray-400">
        Shoot me an 
        <a :href="`mailto:${siteConfig.social.email}`" class="text-blue-400 hover:text-blue-300 transition-colors">email</a>
        or message on 
        <a :href="siteConfig.social.linkedin" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 transition-colors">LinkedIn</a>.
      </p>
    </section>
  </DefaultLayout>
</template>
