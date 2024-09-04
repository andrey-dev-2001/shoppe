<template>
  <div class="base-tabs">
    <BaseButton class="base-tabs__tab" tag="RouterLink" to="sign-in">
      Sign in
    </BaseButton>

    <BaseButton class="base-tabs__tab" tag="RouterLink" to="sign-up">
      Register
    </BaseButton>
  </div>
</template>

<script setup lang="ts">

import {BaseButton} from "@/shared";
</script>

<style scoped lang="scss">
@import "BaseTabs";
</style>
