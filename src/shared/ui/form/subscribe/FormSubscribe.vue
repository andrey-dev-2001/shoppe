<template>
  <form @submit="onSubmit" class="footer__subscribe">
    <BaseField>
      <template #input>
        <BaseInput class="footer__subscribe-input" name="email" autocomplete="email" v-model="email" v-bind="emailAttrs" placeholder="Give an email, get the newsletter." />
      </template>

      <template #button>
        <BaseButton class="footer__subscribe-submit" tag="button" type="submit" variant="icon" color="gray" @click="hasSubmitted = true" :icon="ArrowIcon" aria-label="Send email address"/>
      </template>

      <template v-if="hasSubmitted" #error>
        {{ errors.email || errors.termsAgree }}
      </template>

      <template #footer>
        <BaseCheckBox name="termsAgree" v-model="termsAgree" v-bind="termsAgreeAttrs" label="I agree to the website’s terms and conditions" />
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
import BaseCheckBox from "@/shared/ui/base/checkbox/BaseCheckBox.vue";

const hasSubmitted = ref(false);

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email('Invalid email format').required('Email is required'),
    termsAgree: yup.boolean().isTrue('You must agree to the terms'),
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
});

const [email, emailAttrs] = defineField('email');
const [termsAgree, termsAgreeAttrs] = defineField('termsAgree')
</script>

<style lang="scss">
 @import "FormSubscribe";
</style>
