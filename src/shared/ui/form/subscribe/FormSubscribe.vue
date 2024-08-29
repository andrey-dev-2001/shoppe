<template>
  <DynamicForm :fields="fields"/>
</template>

<script setup lang="ts">
import * as Yup from 'yup';
import DynamicForm from "@/shared/ui/form/dynamic-form/DynamicForm.vue";


const  fields = [
    {
      label: 'Your Name',
      name: 'name',
      as: 'input',
      rules: Yup.string().required(),
    },
    {
      label: 'Your Email',
      name: 'email',
      as: 'input',
      rules: Yup.string().email().required(),
    },
    {
      label: 'Your Password',
      name: 'password',
      as: 'input',
      type: 'password',
      rules: Yup.string().min(6).required(),
    },
  ]
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 0.875rem;
}

.form-input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 4px;
}

.form-input.is-invalid {
  border-color: red;
}
</style>
