<template>
  <div class="orders">
  <div class="container">
    <div class="orders__inner">
    <div class="orders__nothing">
      <p class="orders__nothing-text">No order has been made yet.</p>
      <BaseButton class="orders__nothing-button" variant="link" color="accent" tag="RouterLink" to="/shop">
        BROWSE PRODUCT
      </BaseButton>
    </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">

import {BaseButton} from "@/shared";
</script>

<style lang="scss">
  @import "OrdersPage";
</style>
