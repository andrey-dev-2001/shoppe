<template>
  <li class="product" tabindex="0">
    <div class="product__image-block">
      <BaseImage class="product__image" :src="productImage" :alt="productName" />

      <ul class="product__nav">
        <BaseButton
            v-for="(button, btnIndex) in buttons"
            :key="btnIndex"
            class="product__nav-button"
            tag="button"
            @click="handleAction(button.action)"
            :icon="button.icon"
            :aria-label="button.ariaLabel"
            variant="icon"
            color="gray"
        />
      </ul>
    </div>

    <p class="product__name">{{ productName }}</p>
    <p class="product__price">{{ productPrice }}</p>
  </li>
</template>

<script setup lang="ts">
import {BaseButton, BaseImage, CartIcon, ShowIcon, WishIcon} from "@/shared";
import { defineProps, PropType } from 'vue';

interface Product {
  productId: number;
  productImage: string;
  productName: string;
  productPrice: string;
}

const props = defineProps({
  productId: Number,
  productImage: String,
  productName: String,
  productPrice: String
});

const buttons = [
  {
    icon: CartIcon,
    action: 'addToCart',
    ariaLabel: `Add ${props.productName} to cart`
  },
  {
    icon: ShowIcon,
    action: 'showProductDetails',
    ariaLabel: `Show ${props.productName} details`
  },
  {
    icon: WishIcon,
    action: 'addToWishList',
    ariaLabel: `Add ${props.productName} to wish list`
  }
];

const handleAction = (action: string) => {
  switch (action) {
    case 'addToCart':
      addToCart();
      break;
    case 'showProductDetails':
      showProductDetails();
      break;
    case 'addToWishList':
      addToWishList();
      break;
    default:
      console.error('Unknown action:', action);
  }
};

const addToCart = () => {
  console.log(`Added ${props.productName} to cart`);
};

const showProductDetails = () => {
  console.log(`Showing details for ${props.productName}`);
};

const addToWishList = () => {
  console.log(`Added ${props.productName} to wish list`);
};
</script>

<style scoped lang="scss">
@import "ProductCard";
</style>
