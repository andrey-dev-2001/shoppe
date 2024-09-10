<template>
  <main class="our-story">
    <div class="container">
      <div class="our-story__inner">
        <h1 class="page__title">
          About
        </h1>

        <p class="page__title-description">
          Who we are and why we do what we do!
        </p>

        <p class="page__description">
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis.
        </p>

        <h2 class="page__section-title">
          Top trends
        </h2>

        <BaseImage
            class="our-story__picture"
            :src="img.src.toString()"
            :mobile-src="img.mobileSrc.toString()"
            :alt="img.alt"
            :width="img.width"
            :height="img.height"
            :mobile-width="img.mobileWidth"
            :mobile-height="img.mobileHeight"
        />

        <p class="page__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.
        </p>

        <ol class="page__list">
          <li class="page__list-item">
            consectetur adipiscing elit. Aliquam placerat
          </li>

          <li class="page__list-item">
            Lorem ipsum dolor sit amet consectetur
          </li>
        </ol>

        <h2 class="page__section-title">
          Produced with care
        </h2>

        <BaseImage
            class="our-story__picture"
            :src="img2.src.toString()"
            :mobile-src="img2.mobileSrc.toString()"
            :alt="img2.alt"
            :width="img2.width"
            :height="img2.height"
            :mobile-width="img2.mobileWidth"
            :mobile-height="img2.mobileHeight"
        />

        <p class="page__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendu.
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import {BaseImage} from "@/shared";

const img = {
  src: new URL('@/shared/assets/img/our-story/img-1.webp', import.meta.url),
  mobileSrc: new URL('@/shared/assets/img/our-story/img-1-mobile.webp', import.meta.url),
  alt: "Close-up of a woman wearing a luxury watch",
  width: 670,
  height: 300,
  mobileWidth: 288,
  mobileHeight: 200,
};

const img2 = {
  src: new URL('@/shared/assets/img/our-story/img-2.webp', import.meta.url),
  mobileSrc: new URL('@/shared/assets/img/our-story/img-2-mobile.webp', import.meta.url),
  alt: "Close-up of a woman wearing a luxury watch",
  width: 670,
  height: 300,
  mobileWidth: 288,
  mobileHeight: 200,
};
</script>

<style lang="scss">
@import "OurStoryPage";
</style>
