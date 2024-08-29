<template>
  <div class="base-field">
    <div class="base-field__inner">
      <Field :name="name" :type="type" v-slot="{ field }">
        <BaseInput v-bind="Field"></BaseInput>
      </Field>
      <slot name="input"/>
      <slot name="button"/>
    </div>
    <div class="base-field__error" v-if="error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import {Field} from "vee-validate";
import BaseInput from "@/shared/ui/base/input/BaseInput.vue";

interface Props {
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  error: null,
});
</script>

<style lang="scss">
@import 'BaseField';

.base-field__error {
  color: red;
}
</style>
