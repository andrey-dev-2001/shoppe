<template>


  <main class="main">
    <article class="page">
      <router-view />
    </article>
  </main>
<!--  <TheFooter/>-->
  <slot />
</template>

<script setup lang="ts">
import {TheHeader} from "@/widgets";

interface Props{
  borderBottom: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  borderBottom: false
})

</script>

<style scoped lang="scss">
@import './styles';
</style>
