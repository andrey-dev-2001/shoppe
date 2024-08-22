<template>
  <div class="dropdown">
    <ul class="dropdown__list">
      <li
          class="dropdown__item"
          v-for="(item, index) in dropdownItems"
          :key="index"
      >
        <BaseButton
            class="dropdown__item-link"
            tag="RouterLink"
            :to="item.to"
        >
          {{ item.text }}
        </BaseButton>
        <ul class="dropdown__sub-list">
          <li class="dropdown__sub-item" v-for="(button, index) in item.linksList"
              :key="index">
            <BaseButton
                class="dropdown__sub-item-link"
                tag="RouterLink"
                :to="button.to"
            >
              {{ button.text }}
            </BaseButton>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import {BaseButton} from "@/shared";

const dropdownItems = [
  { text: "SHOP TYPES", to: "/", linksList: [
      { text: "Shop full width", to: "/" },
      { text: "Shop With sidebar", to: "/" },
      { text: "Shop category", to: "/" },
      { text: "Shop carousel", to: "/" },
      { text: "Masonry grid", to: "/" },
    ] },
  { text: "SHOP TYPES", to: "/", linksList: [
      { text: "Shop full width", to: "/" },
      { text: "Shop With sidebar", to: "/" },
      { text: "Shop category", to: "/" },
      { text: "Shop carousel", to: "/" },
      { text: "Masonry grid", to: "/" },
    ] },
];
</script>
