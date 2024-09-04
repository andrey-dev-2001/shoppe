<template>
  <main class="contact-us">
    <div class="container">
    <h1 class="page__title contact-us__title ">Contact Us</h1>
    <p class="contact-us__title-description page__title-description">Say Hello send us your thoughts about our products or share
      your ideas with our Team!</p>
    <form class="contact-us__form" @submit="onSubmit">
      <div class="contact-us__form-inputs">
      <BaseField class="contact-us__first-name">
        <template #input>
          <BaseInput v-model="firstName" v-bind="firstNameAttrs" placeholder="First name" />
        </template>

        <template #error v-if="hasSubmitted && errors.firstName">
          {{ errors.firstName }}
        </template>
      </BaseField>

      <BaseField class="contact-us__lastName">
        <template #input>
          <BaseInput v-model="lastName" v-bind="lastNameAttrs" placeholder="Last name" />
        </template>

        <template #error v-if="hasSubmitted && errors.lastName">
          {{ errors.lastName }}
        </template>
      </BaseField>

      <BaseField class="contact-us__email">
        <template #input>
          <BaseInput v-model="email" v-bind="emailAttrs" placeholder="Email" />
        </template>

        <template #error v-if="hasSubmitted && errors.email">
          {{ errors.email }}
        </template>
      </BaseField>

      <BaseField class="contact-us__subject">
        <template #input>
          <BaseSelect/>
        </template>

        <template #error v-if="hasSubmitted && errors.subject">
          {{ errors.subjectId }}
        </template>
      </BaseField>


      <BaseField class="contact-us__message">
        <template #input>
         <BaseTextArea v-model="message" v-bind="messageAttrs" placeholder="Message"></BaseTextArea>
        </template>

        <template #error v-if="hasSubmitted && errors.message">
          {{ errors.message }}
        </template>
      </BaseField>
      </div>

      <BaseButton class="contact-us__submit" tag="button" type="submit">Send</BaseButton>
    </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import BaseInput from "@/shared/ui/base/input/BaseInput.vue";
import BaseField from "@/shared/ui/base/field/BaseField.vue";
import { ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import {AuthApi, ContactUsApi, useApi} from '@/shared/api';
import {BaseButton} from "@/shared";
import DropDown from "@/widgets/header/ui/dropdown/dropdown/DropDown.vue";
import BaseDropDown from "@/shared/ui/base/dropdown/BaseDropDown.vue";
import BaseSelect from "@/shared/ui/base/select/BaseSelect.vue";
import BaseTextArea from "@/shared/ui/base/text-area/BaseTextArea.vue";

const hasSubmitted = ref(false);

const schema = yup.object({
    firstName: yup
        .string()
        .required('First name is required')
        .max(50, 'First name must be at most 50 characters'),

    lastName: yup
        .string()
        .required('Last name is required')
        .max(50, 'Last name must be at most 50 characters'),

    email: yup
        .string()
        .required('Email is required')
        .email('Email must be a valid email address')
        .max(100, 'Email must be at most 100 characters'),

    subjectId: yup
        .number()
        .required('Subject ID is required')
        .integer('Subject ID must be an integer')
        .positive('Subject ID must be a positive number'),

    message: yup
        .string()
        .required('Message is required')
        .max(500, 'Message must be at most 500 characters'),
});

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: schema,
});

const [firstName, firstNameAttrs] = defineField('firstName');
const [lastName, lastNameAttrs] = defineField('lastName');
const [email, emailAttrs] = defineField('email');
const [subjectId, subjectIdAttrs] = defineField('subjectId');
const [message, messageAttrs] = defineField('message');

async function sendContactForm(
    firstName: string,
    lastName: string,
    email: string,
    subjectId: number,
    message: string
): Promise<void> {
  const api = useApi(ContactUsApi);

  try {
    const contactUsCreate = { firstName, lastName, email, subjectId, message };
    await api.apiContactUsPost({ contactUsCreate });
  } catch (error) {
    console.error('Error sending contact form:', error);
  }
}

const onSubmit = handleSubmit(values => {
  hasSubmitted.value = true;
  sendContactForm(values.firstName, values.lastName, values.email, values.subjectId, values.message);
});
</script>

<style lang="scss">
@import "ContactUsPage";
</style>
