<template>
  <div class="downloads">
    <div class="container">
      <div class="downloads__inner">
        <div class="downloads__nothing">
          <p class="downloads__nothing-text">No downloads available yet.</p>
          <BaseButton class="downloads__nothing-button" variant="link" color="accent" tag="RouterLink" to="/shop">
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
@import "DownloadsPage";
</style>
