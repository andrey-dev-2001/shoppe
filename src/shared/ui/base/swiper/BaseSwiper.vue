<template>
  <Swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <slot :slide="slide">
        <div class="default-slide-content">
          {{ slide }}
        </div>
      </slot>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

const modules = [Navigation, Pagination, Scrollbar, A11y];

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};
</script>

<style>
</style>
