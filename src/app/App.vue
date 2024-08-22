<template>
  <TheHeader :borderBottom="!isHomePage" />
  <router-view />
</template>

<script setup lang="ts">
import { TheHeader } from "@/widgets";
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const isHomePage = computed(() => route.meta.headerBorder === false);
</script>
