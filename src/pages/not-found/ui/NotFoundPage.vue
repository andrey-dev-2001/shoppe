<template>
  <main class="not-found">
    <div class="container">
      <div class="not-found__inner">
        <h1 class="not-found__title">404 ERROR</h1>

        <p class="not-found__description">This page not found; <br> back to home and start again</p>

        <BaseButton class="not-found__button" tag="RouterLink" to="/">Homepage</BaseButton>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import {BaseButton} from "@/shared";
</script>

<style lang="scss">
@import "NotFoundPage";
</style>
