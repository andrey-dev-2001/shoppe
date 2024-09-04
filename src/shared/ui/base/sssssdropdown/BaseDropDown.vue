<template>
  <div class="sssssdropdown" style="display: none">
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
          <li class="dropdown__sub-item" v-for="(subItem, index) in item.linksList"
              :key="index">
            <BaseButton
                class="dropdown__sub-item-link"
                tag="RouterLink"
                :to="subItem.to"
            >
              {{ subItem.text }}
            </BaseButton>
            <ul class="dropdown__sub-list" v-if="subItem.sublinksList">
              <li class="dropdown__sub-item" v-for="(button, index) in subItem.sublinksList"
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
  { text: "SINGLE PRODUCT", to: "/", linksList: [
      { text: "Standard product", to: "/" },
      { text: "Variable product", to: "/" },
      { text: "On sale product", to: "/" },
      { text: "Out of stock product", to: "/" },
      { text: "New! Product", to: "/" },
    ] },
  { text: "SHOP PAGES", to: "/", linksList: [
      { text: "Cart", to: "/", sublinksList: [
          { text: "Cart", to: "/" },
          { text: "Checkout", to: "/" },
          { text: "My account", to: "/" },
          { text: "Wishlist", to: "/" },
          { text: "Order tracking", to: "/" },
        ] },
      { text: "Checkout", to: "/", sublinksList: [
          { text: "Cart", to: "/" },
          { text: "Checkout", to: "/" },
          { text: "My account", to: "/" },
          { text: "Wishlist", to: "/" },
          { text: "Order tracking", to: "/" },
        ] },
      { text: "My account", to: "/", sublinksList: [
          { text: "Cart", to: "/" },
          { text: "Checkout", to: "/" },
          { text: "My account", to: "/" },
          { text: "Wishlist", to: "/" },
          { text: "Order tracking", to: "/" },
        ] },
      { text: "Wishlist", to: "/", sublinksList: [
          { text: "Cart", to: "/" },
          { text: "Checkout", to: "/" },
          { text: "My account", to: "/" },
          { text: "Wishlist", to: "/" },
          { text: "Order tracking", to: "/" },
        ] },
      { text: "Order tracking", to: "/", sublinksList: [
          { text: "Cart", to: "/" },
          { text: "Checkout", to: "/" },
          { text: "My account", to: "/" },
          { text: "Wishlist", to: "/" },
          { text: "Order tracking", to: "/" },
        ] },
    ] },
];
</script>

<style lang="scss">
@import "BaseDropDown";
</style>
