<template>
  <TheHeader />
  <router-view class="page" />
  <TheFooter />
</template>

<script setup lang="ts">
import {TheFooter, TheHeader} from "@/widgets";
import { useRoute } from 'vue-router';

const route = useRoute();

</script>
