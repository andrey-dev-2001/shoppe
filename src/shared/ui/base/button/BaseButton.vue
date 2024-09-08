<template>
  <Component
      :is="props.tag"
      :href="props.href || props.to"
      :to="props.to"
      :type="props.type"
      :disabled="props.disabled || props.loading"
      :class="classes"
      class="button"
      @click="onClick"
  >
    <BaseIcon
        v-if="props.loading"
        icon="icon-loader"
        class="button__loading-icon"
    />

    <BaseIcon v-if="props.icon" :icon="props.icon" class="button__icon" />

    <slot name="default" />
  </Component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { BaseIcon } from '@/shared'
import { RouteLocationRaw } from 'vue-router'

interface Props {
  variant?: 'link' | 'icon' | 'button-border' | 'button-background'
  color?: 'black' | 'accent' | 'gray' | 'white'
  size?: '16' | '20'
  weight?: '700' | '400'
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
  [`button__text-${props.textTransform}`]: props.textTransform,
  [`button__justify-content-${props.justifyContent}`]: props.justifyContent,
  [`button_active`]: props.active,
  [`button__variant-${props.variant}`]: props.variant,
  [`button__color-${props.color}`]: props.color,
  [`button__size-${props.size}`]: props.size,
  [`button__weight-${props.weight}`]: props.weight,
  [`button__loading`]: props.loading,
}))

function onClick(event: PointerEvent) {
  emit('click', event)
}
</script>

<style lang="scss">
@import 'BaseButton';
</style>
