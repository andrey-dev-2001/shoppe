<template>
  <ul class="products__list">
    <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product-image="product.image.toString()"
        :product-name="product.name"
        :product-price="product.price"
    />
  </ul>
</template>

<script setup lang="ts">
import ProductCard from "@/shared/ui/base/product/ProductCard.vue";

interface Product {
  image: string;
  name: string;
  price: string;
}

const props = defineProps<{
  products: Product[]
}>();
</script>

<style scoped lang="scss">
  @import "ProductList";
</style>
