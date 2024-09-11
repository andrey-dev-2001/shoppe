<template>
  <div class="details">
    <div class="container">
      <div class="details__inner">
        <h1 class="details__title">Account details</h1>

        <form class="details__form" @submit.prevent="onSubmit">
          <BaseField class="details__first-name">
            <template #input>
              <BaseInput v-model="firstName" v-bind="firstNameAttrs" placeholder="First name*" />
            </template>
            <template #error v-if="hasSubmitted && errors.firstName">
              {{ errors.firstName }}
            </template>
          </BaseField>

          <BaseField class="details__last-name">
            <template #input>
              <BaseInput v-model="lastName" v-bind="lastNameAttrs" placeholder="Last name*" />
            </template>
            <template #error v-if="hasSubmitted && errors.lastName">
              {{ errors.lastName }}
            </template>
          </BaseField>

          <BaseField class="details__display-name">
            <template #input>
              <BaseInput v-model="displayName" v-bind="displayNameAttrs" placeholder="Display name*" />
            </template>
            <template #error v-if="hasSubmitted && errors.displayName">
              {{ errors.displayName }}
            </template>
          </BaseField>

          <BaseField class="details__email">
            <template #input>
              <BaseInput v-model="email" v-bind="emailAttrs" placeholder="Email address*" />
            </template>
            <template #error v-if="hasSubmitted && errors.email">
              {{ errors.email }}
            </template>
          </BaseField>

          <div class="details__password-change">
            <h2 class="details__password-change-title">Password change</h2>

            <BaseField class="details__current-password">
              <template #input>
                <BaseInput v-model="currentPassword" placeholder="Current password (leave blank to leave unchanged)" />
              </template>
              <template #error v-if="hasSubmitted && errors.currentPassword">
                {{ errors.currentPassword }}
              </template>
            </BaseField>

            <BaseField class="details__new-password">
              <template #input>
                <BaseInput v-model="newPassword" placeholder="New password (leave blank to leave unchanged)" />
              </template>
              <template #error v-if="hasSubmitted && errors.newPassword">
                {{ errors.newPassword }}
              </template>
            </BaseField>

            <BaseField class="details__confirm-password">
              <template #input>
                <BaseInput v-model="confirmPassword" placeholder="Confirm new password" />
              </template>
              <template #error v-if="hasSubmitted && errors.confirmPassword">
                {{ errors.confirmPassword }}
              </template>
            </BaseField>
          </div>

          <BaseButton tag="button" variant="button-background" color="white" class="details__submit" type="submit">Save changes</BaseButton>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import BaseInput from "@/shared/ui/base/input/BaseInput.vue";
import BaseField from "@/shared/ui/base/field/BaseField.vue";
import { ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import {BaseButton} from "@/shared";

const hasSubmitted = ref(false);

// Схема валидации с Yup
const schema = yup.object({
  firstName: yup
      .string()
      .required('First name is required')
      .max(50, 'First name must be at most 50 characters'),

  lastName: yup
      .string()
      .required('Last name is required')
      .max(50, 'Last name must be at most 50 characters'),

  displayName: yup
      .string()
      .required('Display name is required')
      .max(50, 'Display name must be at most 50 characters'),

  email: yup
      .string()
      .required('Email is required')
      .email('Email must be a valid email address')
      .max(100, 'Email must be at most 100 characters'),

  currentPassword: yup.string().optional(),
  newPassword: yup.string().optional(),
  confirmPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'Passwords must match')
      .optional(),
});

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: schema,
});

const [firstName, firstNameAttrs] = defineField('firstName');
const [lastName, lastNameAttrs] = defineField('lastName');
const [displayName, displayNameAttrs] = defineField('displayName');
const [email, emailAttrs] = defineField('email');

// Поля для паролей
const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

// Логика отправки формы
const onSubmit = handleSubmit(values => {
  hasSubmitted.value = true;
  console.log(values);
});
</script>

<style lang="scss">
 @import "DetailsPage";
</style>
