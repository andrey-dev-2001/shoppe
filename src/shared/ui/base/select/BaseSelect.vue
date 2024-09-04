<template>
  <BaseDropDown
      class="select"
      isAbsolute
      :options="options"
      v-model="selectedOption"
  >
    <template #selected>
      <div class="select-trigger">
        {{ selectedOption ? selectedOption.label : 'Select an option' }}
      </div>
    </template>

    <template #options>
      <li
          v-for="option in options"
          :key="option.value"
          class="select-option"
          @click="selectOption(option)"
          :class="{ 'is-selected': option.value === selectedOption?.value }"
      >
        {{ option.label }}
      </li>
    </template>
  </BaseDropDown>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseDropDown from "@/shared/ui/base/dropdown/BaseDropDown.vue";

const options = ref([
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
]);

const selectedOption = ref(null);

const selectOption = (option) => {
  selectedOption.value = option;
};
</script>

<style lang="scss">
@import 'BaseSelect.scss';

.select-option.is-selected {
  font-weight: bold;
  background-color: #e0f7fa;
}
</style>
