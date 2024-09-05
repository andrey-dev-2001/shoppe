<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
        <slot :slide="slide"></slot>
      </div>
    </div>
    <!-- Додаємо навігацію і пагінацію, якщо потрібно -->
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

// Пропси для компонента
const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});

// Ініціалізація Swiper з опціями
const swiperOptions = reactive({
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  ...props.options, // Об'єднуємо з користувацькими опціями
});
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Центрування слайдів */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
