<template>
  <main class="home">
    <swiper class="swiper" :modules="modules" :slides-per-view="1" :pagination="{ clickable: true }">
      <swiper-slide v-for="(product, index) in products" :key="index" v-slot="{ isActive }" class="swiper__slide">
        <div class="banner">
          <img class="banner__background" width="1248" height="646" :loading="{'lazy' : index > 0}" :src="product.image" :alt="product.name">
          <div class="banner__inner">
            <p class="banner__title">
              {{ product.name }}
            </p>
            <p class="banner__price">
              {{ product.price }}
            </p>
            <BaseButton class="banner__button" variant="button-border" color="white" size="16" :tabindex="isActive ? 0 : -1" tag="RouterLink" :to="{ name: 'product', params: { id: product.id }}">
              View Product
            </BaseButton>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="container">
      <div class="home__inner">
        <div class="products">
          <div class="products__header">
            <h1 class="products__header-title">Shop The Latest</h1>

            <BaseButton class="products__header-link" variant="link" color="accent" tag="RouterLink" :to="{ name: 'shop' }">View All</BaseButton>
          </div>

          <ProductList :products="products" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { EffectCube, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/less';
import 'swiper/less/pagination';

import BaseButton from '@/shared/ui/base/button/BaseButton.vue'
import ProductList from "@/shared/ui/base/product-list/ProductList.vue"

const modules = [EffectCube, Pagination]

const bannerProducts = []

const products = [
  {
    id: 1,
    image: new URL('@/shared/assets/img/img.webp', import.meta.url),
    name: "Gold big hoops",
    price: "68,00"
  },
  {
    id: 1,
    image: new URL('@/shared/assets/img/img.webp', import.meta.url),
    name: "Gold big hoops",
    price: "20,00"
  },
  {
    id: 1,
    image: new URL('@/shared/assets/img/img.webp', import.meta.url),
    name: "Gold big hoops",
    price: "20,00"
  },
  {
    id: 2,
    image: new URL('@/shared/assets/img/img.webp', import.meta.url),
    name: "Sophia Necklace",
    price: "35,00"
  },
  {
    id: 3,
    image: new URL('@/shared/assets/img/img.webp', import.meta.url),
    name: "Luna Bracelet",
    price: "15,00"
  }
];
</script>

<style lang="scss">
@import "HomePage";
</style>
