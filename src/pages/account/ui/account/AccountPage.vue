<template>
  <div class="account">
    <div class="container">
      <div class="account__tabs embla" ref="emblaRef">
        <div class="account__tabs-container embla__container">
          <!-- Используем v-for для динамического отображения кнопок -->
          <div
              v-for="(button, index) in buttons"
              :key="index"
              class="account__tabs-item embla__slide"
          >
            <BaseButton
                v-if="button.tag === 'RouterLink'"
                :tag="button.tag"
                :to="button.to"
                class="base-tabs__tab"
            >
              {{ button.label }}
            </BaseButton>

            <BaseButton
                v-else
                @click="button.action === 'logout' ? handleLogout() : null"
                class="base-tabs__tab"
            >
              {{ button.label }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>

    <div class="account__page">
      <RouterView/>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue';
import { useRouter } from 'vue-router';
import BaseButton from "@/shared/ui/base/button/BaseButton.vue";

const [emblaRef] = emblaCarouselVue({
  align: 'start',
  breakpoints: {
    '(min-width: 1210px)': { active: false }
  }
});

const router = useRouter();

// Массив кнопок
const buttons = [
  { label: 'Dashboard', tag: 'RouterLink', to: 'dashboard' },
  { label: 'Orders', tag: 'RouterLink', to: 'orders' },
  { label: 'Downloads', tag: 'RouterLink', to: 'downloads' },
  { label: 'Addresses', tag: 'RouterLink', to: 'addresses' },
  { label: 'Account details', tag: 'RouterLink', to: 'details' },
  { label: 'Logout', tag: 'button', action: 'logout' },
];

const handleLogout = () => {
  router.push({ name: 'sign-in' });
};
</script>

<style scoped lang="scss">
@import "AccountPage";
</style>
