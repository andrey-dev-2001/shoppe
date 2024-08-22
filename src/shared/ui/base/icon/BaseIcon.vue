<template>
  <component class="base-icon" :is="icon"/>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  icon: Object
}

const props = withDefaults(defineProps<Props>(), {})

const icon = computed(() => props.icon)
</script>

<style lang="scss" scoped>
@import 'BaseIcon';
</style>
