<template>
  <form class="sign-up" @submit="onSubmit">
    <BaseField class="sign-up__email">
      <template #input>
        <BaseInput name="email" autocomplete="email" v-model="email" v-bind="emailAttrs" placeholder="Email" />
      </template>

      <template #error v-if="hasSubmitted && errors.email">
        {{ errors.email }}
      </template>
    </BaseField>

    <BaseField class="sign-up__password">
      <template #input>
        <BaseInput name="password" type="password" v-model="password" v-bind="passwordAttrs" placeholder="Password" />
      </template>

      <template #error v-if="hasSubmitted && errors.password">
        {{ errors.password }}
      </template>
    </BaseField>

    <BaseField class="sign-up__confirm-password">
      <template #input>
        <BaseInput name="confirmPassword" type="password" v-model="confirmPassword" v-bind="confirmPasswordAttrs" placeholder="Confirm password" />
      </template>

      <template #error v-if="hasSubmitted && errors.confirmPassword">
        {{ errors.confirmPassword }}
      </template>
    </BaseField>

    <BaseButton class="sign-up__submit" tag="button" type="submit">Sign up</BaseButton>
  </form>
</template>

<script setup lang="ts">
import BaseInput from "@/shared/ui/base/input/BaseInput.vue";
import BaseField from "@/shared/ui/base/field/BaseField.vue";
import { ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { AuthApi, useApi } from '@/shared/api';
import {BaseButton} from "@/shared";

const hasSubmitted = ref(false);

const schema = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm password is required'),
});

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: schema,
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [confirmPassword, confirmPasswordAttrs] = defineField('confirmPassword');

async function loginIn(email: string, password: string) {
  const api = useApi(AuthApi);
  try {
    const userData = await api.authRegisterPost({ registerModel: { username: email, email: email, password: password, confirmPassword: password } });
    console.log(userData);
  } catch (error) {
    console.error('Login failed:', error);
  }
}



const onSubmit = handleSubmit(values => {
  hasSubmitted.value = true;
  loginIn(values.email, values.password);
});
</script>

<style lang="scss">
@import "SignUpPage";
</style>
