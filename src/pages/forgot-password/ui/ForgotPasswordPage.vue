<template>
  <main class="forgot-password">
    <div class="container">
      <div class="forgot-password__inner">
      <h1 class="forgot-password__title page__title">
        Have you Forgotten Your Password ?
      </h1>

      <p class="forgot-password__title-description page__title-description">
        If you've forgotten your password, enter your e-mail address and we'll send you an e-mail
      </p>

      <form class="forgot-password__form" @submit="onSubmit">
        <BaseField class="contact-us__email">
          <template #input>
            <BaseInput v-model="email" v-bind="emailAttrs" placeholder="Email" />
          </template>

          <template #error v-if="hasSubmitted && errors.email">
            {{ errors.email }}
          </template>
        </BaseField>

        <BaseButton class="forgot-password__submit" tag="button" type="submit">Reset password</BaseButton>
      </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import BaseInput from "@/shared/ui/base/input/BaseInput.vue";
import BaseField from "@/shared/ui/base/field/BaseField.vue";
import {ref} from "vue";
import {Form, useForm} from "vee-validate";
import * as yup from "yup";
import {BaseButton} from "@/shared";

const hasSubmitted = ref(false);

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
</script>

<style lang="scss">
@import "ForgotPasswordPage";
</style>
