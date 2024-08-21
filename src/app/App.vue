<template>

  <TheHeader borderBottom></TheHeader>
  <router-view />
</template>

<script setup lang="ts">
import { TheHeader } from "@/widgets";
import {useRoute} from "vue-router";
import {AppPages, AppRoutes, EAppProviders} from "@/app/providers";
import {provide} from "vue";

provide(EAppProviders.AppRoutes, AppRoutes)
provide(EAppProviders.AppPages, AppPages)

const route = useRoute()
</script>
