<template>
  <div class="base-tabs">
    <BaseButton
        v-for="(tab, index) in tabs"
        :key="index"
        class="base-tabs__tab"
        :tag="tab.tag"
        :to="tab.to"
    >
      {{ tab.label }}
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { BaseButton } from '@/shared';

interface TabWithLink {
  label: string;
  tag: 'RouterLink';
  to: string;
  action?: undefined;
}

interface TabWithAction {
  label: string;
  tag: 'button';
  action: string;
  to?: undefined;
}

type Tab = TabWithLink | TabWithAction;

const props = defineProps<{
  tabs: Tab[];
}>();
</script>

<style scoped lang="scss">
@import "BaseTabs";
</style>
