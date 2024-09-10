<template>
  <TheHeader />
  <RouterView/>
  <TheFooter />
</template>

<script setup lang="ts">
import {TheFooter, TheHeader} from "@/widgets";
import { useRoute } from 'vue-router';
import {router} from "@/app/providers";

const route = useRoute();

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Shoppe'
  document.title = to.meta.title || defaultTitle

  const metaTags = [
    { name: 'description', content: to.meta.description },
    { name: 'keywords', content: to.meta.keywords },
    { property: 'og:title', content: to.meta.ogTitle },
    { property: 'og:description', content: to.meta.ogDescription },
    { property: 'og:image', content: to.meta.ogImage },
    { property: 'twitter:card', content: to.meta.twitterCard },
    { property: 'twitter:title', content: to.meta.twitterTitle },
    { property: 'twitter:description', content: to.meta.twitterDescription },
    { property: 'twitter:image', content: to.meta.twitterImage },
  ]

  metaTags.forEach(tag => {
    const existingTag = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`)
    if (existingTag) {
      existingTag.setAttribute('content', tag.content || '')
    } else {
      const meta = document.createElement('meta')
      if (tag.name) meta.setAttribute('name', tag.name)
      if (tag.property) meta.setAttribute('property', tag.property)
      meta.setAttribute('content', tag.content || '')
      document.head.appendChild(meta)
    }
  })

  next()
})

</script>
