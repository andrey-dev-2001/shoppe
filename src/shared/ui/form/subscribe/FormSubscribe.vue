<template>
  <form @submit="onSubmit">
    <BaseField>
      <template #input>
        <BaseInput name="email" autocomplete="email" v-model="email" v-bind="emailAttrs" placeholder="Give an email, get the newsletter." />
      </template>

      <template #button>
        <BaseButton tag="button" type="submit" @click="hasSubmitted = true" :icon="ArrowIcon" aria-label="Send email address"/>
      </template>

      <template v-if="hasSubmitted" #error>
        {{ errors.email }}
      </template>
    </BaseField>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import BaseInput from "@/shared/ui/base/input/BaseInput.vue";
import {BaseButton} from "@/shared";
import ArrowIcon from "@/shared/assets/icons/ArrowIcon.vue";
import BaseField from "@/shared/ui/base/field/BaseField.vue";

const hasSubmitted = ref(false);

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email('Неправильний формат email').required('Email обов\'язковий'),
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

const [email, emailAttrs] = defineField('email');
</script>
