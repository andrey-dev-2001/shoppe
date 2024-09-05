<template>
  <main class="home">
    <div class="container">
      <div class="home__inner">
        <swiper :modules="modules" :slides-per-view="1" :pagination="{ clickable: true }">
          <swiper-slide>
            <div class="banner">
              <img class="banner__background" src="@/shared/assets/img/img.jpg" alt="Slide 1">
              <div class="banner__inner">
                <p class="banner__title">Gold big hoops</p>
                <p class="banner__price">$ 68,00</p>
                <BaseButton class="banner__button" tag="button">
                  VIEW PRODUCT
                </BaseButton>
              </div>
            </div>

          </swiper-slide>
          <swiper-slide>
            <div class="banner">
              <img class="banner__background" src="@/shared/assets/img/img.jpg" alt="Slide 2">
              <div class="banner__inner">
                <p class="banner__title">Gold big hoops</p>
                <p class="banner__price">$ 68,00</p>
                <button class="banner__button">
                  VIEW PRODUCT
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="container">
      <div class="home__inner">
        <div class="products">
          <div class="products__header">
            <h1 class="page__section-title">Shop The Latest</h1>

            <BaseButton class="products__header-link" tag="RouterLink" :to="{name: 'shop'}">View All</BaseButton>
          </div>

          <ul class="products__list">
            <li class="product" v-for="product in 6">
                <div class="product__image">
                    <img src="@/shared/assets/img/product.jpg" alt="Product">
                </div>
                <p class="product__name">
                  Lira Earrings
                </p>
                <p class="product__price">
                  $ 20,00
                </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>

</template>

<script setup lang="ts">
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/pagination';
import {BaseButton} from "@/shared";
const modules = [Pagination]
</script>

<style lang="scss">
@import "HomePage";
</style>
