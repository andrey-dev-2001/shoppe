<template>
  <picture>
    <source v-if="mobileSrc" :srcset="mobileSrc || src" :width="mobileWidth || width" :height="mobileHeight || height" media="(max-width: 576px)">
    <source :srcset="src" :width="width" :height="height" media="(min-width: 577px)">
    <img class="image" :src="src" :alt="alt"/>
  </picture>
</template>

<script setup lang="ts">
interface ImageConfig {
  src: string;
  mobileSrc?: string;
  alt: string;
  width: string | number;
  height: string | number;
  mobileWidth?: string | number;
  mobileHeight?: string | number;
}

defineProps<ImageConfig>();
</script>

<style scoped lang="scss">
.image {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  margin: 0 auto;
}
</style>
