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

        <BaseButton>
          ADD
        </BaseButton>

        <p>
          You have not set up this type of address yet.
        </p>
        </div>

          <div class="addresses__shipping">
          <p class="addresses__title">
            Shipping address
          </p>

          <BaseButton>
            ADD
          </BaseButton>

          <p>
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
</script>

<style lang="scss">
@import "AddressesPage";
</style>
