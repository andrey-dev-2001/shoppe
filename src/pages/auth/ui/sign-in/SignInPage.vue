<template>
  <form @submit="onSubmit" class="sign-in">
  <BaseField class="sign-in__username">
    <template #input>
      <BaseInput name="username" autocomplete="name" v-model="username" v-bind="usernameAttrs" placeholder="Username" />
    </template>

    <template #error v-if="hasSubmitted && errors.username">
      {{errors.username}}
    </template>
  </BaseField>

  <BaseField class="sign-in__password">
    <template #input>
      <BaseInput name="password" type="password" v-model="password" v-bind="passwordAttrs" placeholder="Password" />
    </template>

    <template #error v-if="hasSubmitted && errors.password">
      {{errors.password}}
    </template>
  </BaseField>

    <BaseCheckBox class="sign-in__remember" v-model="rememberMe" v-bind="rememberMeAttrs" name="rememberMe" label="Remember me"/>
    <BaseButton class="sign-in__submit" tag="button" type="submit" @click="hasSubmitted = true">SIGN IN</BaseButton>
    <BaseButton class="sign-in__forgot-password" tag="RouterLink" :to="{ name: 'forgot-password'}">Have you forgotten your password?</BaseButton>
  </form>
</template>
<script setup lang="ts">
import BaseInput from "@/shared/ui/base/input/BaseInput.vue";
import BaseField from "@/shared/ui/base/field/BaseField.vue";
import {ref} from "vue";
import {useForm} from "vee-validate";
import * as yup from "yup";
import {BaseButton} from "@/shared";
import BaseCheckBox from "@/shared/ui/base/checkbox/BaseCheckBox.vue";
import {AuthApi, useApi} from "@/shared/api";

const hasSubmitted = ref(false);

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    username: yup.string().min(6).required(),
    password: yup.string().min(6).required(),
    rememberMe: yup.boolean(),
  }),
});

async function loginIn(username: string, password: string) {
  const api = useApi(AuthApi);
  try {
    const userData = await api.authLoginPost({ loginModel: { username: username, password: password } });
    console.log(userData);
  } catch (error) {
    console.error('Login failed:', error);
  }
}

const onSubmit = handleSubmit(values => {
  hasSubmitted.value = true;
  loginIn(values.username, values.password);
});

const [username, usernameAttrs] = defineField('username');
const [password, passwordAttrs] = defineField('password');
const [rememberMe, rememberMeAttrs] = defineField('rememberMe');
</script>

<style lang="scss">
@import "SignInPage";
</style>
