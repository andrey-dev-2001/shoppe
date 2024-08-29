<template>
  <input
      class="base-input"
      :name="name"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
      @focus="onFocus"
  >
</template>

<script setup lang="ts">
  interface Props {
    name: string,
    type: 'email' | 'password' | 'search' | 'tel' | 'text',
    value: string,
    placeholder: string,
    disabled: boolean,
    required: boolean,
    onChange: (e: InputEvent) => void,
    onInput: (e: InputEvent) => void,
    onBlur: (e: FocusEvent) => void,
    onFocus: (e: FocusEvent) => void
  }

  const props = withDefaults(defineProps<Props>(), {
    name: '',
    type: 'text',
    value: '',
    placeholder: '',
    disabled: false,
    required: false,
    onChange: () => {},
    onInput: () => {},
    onBlur: () => {},
    onFocus: () => {}
  })

</script>

<style lang="scss">
@import 'BaseInput';
</style>
