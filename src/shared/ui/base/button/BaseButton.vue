<template>
  <Component
      :is="props.tag"
      :href="props.href || props.to"
      :to="props.to"
      :type="props.type"
      :disabled="props.disabled || props.loading"
      :class="classes"
      class="base-button"
      @click="onClick"
  >
    <BaseIcon
        v-if="props.loading"
        icon="icon-loader-2"
        class="base-button__loading-icon"
    />

    <BaseIcon v-if="props.icon" :icon="props.icon" class="base-button__icon" />

    <slot name="default" />
  </Component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { BaseIcon } from '@/shared'
import { RouteLocationRaw } from 'vue-router'

interface Props {
  disabled?: boolean
  loading?: boolean
  tag?: 'button' | 'a' | 'RouterLink'
  href?: string | null
  to?: RouteLocationRaw | null
  type?: 'button' | 'submit'
  icon?: string | object | Array<string | object>;
  active?: boolean
  textTransform?: 'none' | 'uppercase'
  justifyContent?: 'center' | 'start' | 'end'
}
const props = withDefaults(defineProps<Props>(), {
  tag: 'button',
  href: null,
  to: null,
  type: 'button',
  icon: undefined,
  textTransform: 'uppercase',
  justifyContent: 'center',
})

const emit = defineEmits<{
  (e: 'click', event: PointerEvent): void
}>()

const classes = computed(() => ({
  [`base-button_text-${props.textTransform}`]: true,
  [`base-button_justify-content-${props.justifyContent}`]: true,
  [`base-button_active`]: props.active,
}))

function onClick(event: PointerEvent) {
  emit('click', event)
}
</script>

<style lang="scss">
@import 'BaseButton';
</style>
