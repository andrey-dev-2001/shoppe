<template>
  <BaseButton class="logo" tag="RouterLink" to="/">
    <img src="./logo.svg" width="130" height="40" alt="Logo" >
  </BaseButton>
</template>

<script lang="ts" setup>
import {BaseButton} from "@/shared";
</script>

<style lang="scss" scoped>
@import 'BaseLogo';
</style>
