<template>
  <div class="dashboard">
    <div class="container">
      <p class="dashboard__description">
        Hello Vitatheme (not Vitatheme?
        <BaseButton variant="link" color="accent" @click="handleLogout">Log out</BaseButton>)
      </p>

      <p class="dashboard__description">
        From your account dashboard you can view your
        <BaseButton tag="RouterLink" to="orders" variant="link" color="accent">recent orders</BaseButton>, manage your
        <BaseButton tag="RouterLink" to="addresses" variant="link" color="accent">shipping and billing addresses</BaseButton>, and edit your
        <BaseButton tag="RouterLink" to="details" variant="link" color="accent">password and account details</BaseButton>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {BaseButton} from "@/shared";

const handleLogout = () => {

}
</script>

<style lang="scss">
@import "DashboardPage";
</style>
