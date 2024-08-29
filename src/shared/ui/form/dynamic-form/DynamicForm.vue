<template>
  <form @submit.prevent="handleSubmit(onSubmit)">
    <div v-for="(field, index) in fields" :key="index">
      <label :for="field.name">{{ field.label }}</label>
      <input
          v-model="values[field.name]"
          v-bind="fieldAttrs[field.name]"
          :type="field.type || 'text'"
          :id="field.name"
      />
      <span v-if="errors[field.name]">{{ errors[field.name] }}</span>
    </div>

    <pre>values: {{ values }}</pre>
    <pre>errors: {{ errors }}</pre>

    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { computed, defineProps, watch } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

const props = defineProps({
  fields: {
    type: Array,
    required: true
  }
});

const validationSchema = computed(() => {
  const schema = {};
  props.fields.forEach(field => {
    schema[field.name] = field.rules;
  });
  return yup.object(schema);
});

const { values, errors, handleSubmit, defineField } = useForm({
  validationSchema: validationSchema.value
});

const fieldAttrs = {};
props.fields.forEach(field => {
  fieldAttrs[field.name] = defineField(field.name, {
    validateOnModelUpdate: false,
    ...field.attrs
  });
});

watch(() => props.fields, () => {
  validationSchema.value = yup.object(
      props.fields.reduce((acc, field) => {
        acc[field.name] = field.rules;
        return acc;
      }, {})
  );
}, { deep: true });

const onSubmit = (values) => {
  console.log(values);
};
</script>
