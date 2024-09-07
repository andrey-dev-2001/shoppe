<template>
  <img :src="src" :alt="alt" class="image" />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  className: {
    type: String,
    default: ''
  }
});
</script>

<style scoped lang="scss">
.image {
  width: 100%;
  height: 100%;
}
</style>
