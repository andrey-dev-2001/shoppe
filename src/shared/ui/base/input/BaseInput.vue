<template>
  <input
      class="base-input"
      :name="name"
      :type="type"
      v-model="inputValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :autocomplete="autocomplete"
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
      @focus="onFocus"
  >
</template>

<script setup lang="ts">
interface Props {
  name: string,
  type?: 'email' | 'password' | 'search' | 'tel' | 'text',
  placeholder: string,
  disabled?: boolean,
  required?: boolean,
  autocomplete?: string,
  onChange: (e: InputEvent) => void,
  onInput: (e: InputEvent) => void,
  onBlur: (e: FocusEvent) => void,
  onFocus?: (e: FocusEvent) => void
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  required: false,
  onChange: () => {},
  onInput: () => {},
  onBlur: () => {},
  onFocus: () => {}
})

const inputValue = defineModel();

</script>

<style lang="scss">
@import 'BaseInput';
</style>
