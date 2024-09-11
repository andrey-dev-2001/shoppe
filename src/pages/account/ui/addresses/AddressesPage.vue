<template>
  <div class="addresses">
    <div class="container">
      <div class="addresses__inner">

        <p class="addresses__description">
          The following addresses will be used on the checkout page by default.
        </p>

        <div class="addresses__forms">
          <div class="addresses__billing">
        <p class="addresses__title">
          Billing address
        </p>

        <BaseButton class="addresses__button" variant="link" color="accent">
          ADD
        </BaseButton>

        <p class="addresses__title-description">
          You have not set up this type of address yet.
        </p>

            <form class="addresses__form">
              <BaseField class="addresses__first-name">
                <template #input>
                  <BaseInput v-model="firstName" v-bind="firstNameAttrs" placeholder="First name*" />
                </template>
                <template #error v-if="hasSubmitted && errors.firstName">
                  {{ errors.firstName }}
                </template>
              </BaseField>

              <BaseField class="addresses__last-name">
                <template #input>
                  <BaseInput v-model="lastName" v-bind="lastNameAttrs" placeholder="Last name*" />
                </template>
                <template #error v-if="hasSubmitted && errors.lastName">
                  {{ errors.lastName }}
                </template>
              </BaseField>

              <BaseField class="addresses__company-name">
                <template #input>
                  <BaseInput v-model="companyName" v-bind="companyNameAttrs" placeholder="Company Name" />
                </template>
                <template #error v-if="hasSubmitted && errors.companyName">
                  {{ errors.companyName }}
                </template>
              </BaseField>

              <BaseField class="addresses__country">
                <template #input>
                  <BaseInput v-model="country" v-bind="countryAttrs" placeholder="Country *" />
                </template>
                <template #error v-if="hasSubmitted && errors.country">
                  {{ errors.country }}
                </template>
              </BaseField>

              <BaseField class="addresses__street-address">
                <template #input>
                  <BaseInput v-model="streetAddress" v-bind="streetAddressAttrs" placeholder="Street Address *" />
                </template>
                <template #error v-if="hasSubmitted && errors.streetAddress">
                  {{ errors.streetAddress }}
                </template>
              </BaseField>

              <BaseField class="addresses__postcode">
                <template #input>
                  <BaseInput v-model="postcode" v-bind="postcodeAttrs" placeholder="Postcode / ZIP *" />
                </template>
                <template #error v-if="hasSubmitted && errors.postcode">
                  {{ errors.postcode }}
                </template>
              </BaseField>

              <BaseField class="addresses__city">
                <template #input>
                  <BaseInput v-model="city" v-bind="cityAttrs" placeholder="Town / City *" />
                </template>
                <template #error v-if="hasSubmitted && errors.city">
                  {{ errors.city }}
                </template>
              </BaseField>

              <BaseField class="addresses__phone">
                <template #input>
                  <BaseInput v-model="phone" v-bind="phoneAttrs" placeholder="Phone *" />
                </template>
                <template #error v-if="hasSubmitted && errors.phone">
                  {{ errors.phone }}
                </template>
              </BaseField>

              <BaseField class="addresses__email">
                <template #input>
                  <BaseInput v-model="email" v-bind="emailAttrs" placeholder="Email *" />
                </template>
                <template #error v-if="hasSubmitted && errors.email">
                  {{ errors.email }}
                </template>
              </BaseField>
            </form>
        </div>

          <div class="addresses__shipping">
          <p class="addresses__title">
            Shipping address
          </p>

          <BaseButton class="addresses__button" variant="link" color="accent">
            ADD
          </BaseButton>

          <p class="addresses__title-description">
            You have not set up this type of address yet.
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {BaseButton} from "@/shared";
import BaseField from "@/shared/ui/base/field/BaseField.vue";
import BaseInput from "@/shared/ui/base/input/BaseInput.vue";
</script>

<style lang="scss">
@import "AddressesPage";
</style>
