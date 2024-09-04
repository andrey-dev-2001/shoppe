<template>
  <main class="auth-page">
    <div class="container">
    <h1 class="auth-page__title">
      My account
    </h1>

    <BaseTabs class="auth-page__tabs"/>

    <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">

import BaseTabs from "@/shared/ui/base/tabs/BaseTabs.vue";
</script>

<style scoped lang="scss">
@import "AuthPage";
</style>
