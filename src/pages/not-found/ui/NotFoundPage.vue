<template>
  <div class="container">
    <div class="error-block">
    <h1 class="error-block__title">404 ERROR</h1>
    <p class="error-block__description">This page not found; <br> back to home and start again</p>
    <BaseButton class="error-block__button" tag="RouterLink" to="/">Homepage</BaseButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import {BaseButton} from "@/shared";
</script>

<style lang="scss">
@import "NotFoundPage";
</style>
