<template>
  <div class="base-checkbox">
    <div class="base-checkbox__container">
      <input
          class="base-checkbox__input"
          type="checkbox"
          v-model="checkbox"
          :value="value"
          :id="name"
          :name="name"
          :true-value="value"
          :false-value="false"
          :checked="checked"
      />
      <div class="base-checkbox__custom">
      </div>
    </div>
    <label class="base-checkbox__label" :for="name">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import CheckboxCheckedIcon from "@/shared/assets/icons/CheckboxCheckedIcon.vue";

defineProps(['value', 'name', 'rectangle', 'checked', 'label'])

const checkbox = defineModel()
</script>

<style lang="scss">
@import 'BaseCheckBox';
</style>
