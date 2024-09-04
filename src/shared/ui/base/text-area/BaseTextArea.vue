<template>
  <textarea
      class="textarea"
      :name="name"
      v-model="textareaValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
      @focus="onFocus"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  name: string;
  placeholder: string;
  disabled: boolean;
  required: boolean;
  onChange: (e: Event) => void;
  onInput: (e: Event) => void;
  onBlur: (e: FocusEvent) => void;
  onFocus: (e: FocusEvent) => void;
}

// Define the props with default values
const props = withDefaults(defineProps<Props>(), {
  name: '',
  placeholder: '',
  disabled: false,
  required: false,
  onChange: () => {},
  onInput: () => {},
  onBlur: () => {},
  onFocus: () => {}
});

// Define the model
const textareaValue = ref('');

// Define event handlers
const onInput = (event: Event) => {
  props.onInput(event);
};

const onChange = (event: Event) => {
  props.onChange(event);
};

const onBlur = (event: FocusEvent) => {
  props.onBlur(event);
};

const onFocus = (event: FocusEvent) => {
  props.onFocus(event);
};
</script>

<style lang="scss">
@import 'BaseTextArea';
</style>
