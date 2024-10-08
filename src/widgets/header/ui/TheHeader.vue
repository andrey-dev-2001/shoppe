<template>
  <header class="header" :class="{'header__border-bottom': borderBottom}">
    <div class="header__desktop">
    <div class="container">
      <div class="header__inner">
        <BaseLogo class="header__logo"></BaseLogo>
        <nav class="header__nav">
          <ul class="header__nav-links">
            <li
                v-for="(link, index) in navLinks"
                :key="index"
                class="header__nav-item"
            >
              <BaseButton
                  class="header__nav-link"
                  tag="RouterLink"
                  :to="link.to">
                {{ link.text }}
              </BaseButton>
              <BaseDropDown/>
            </li>
          </ul>

          <div class="header__nav-line"></div>

          <div class="header__nav-buttons">
            <BaseButton
                v-for="(button, index) in navButtons"
                :key="index"
                class="header__nav-button"
                :class="button.class"
                :tag="button.tag"
                :to="button.to"
                :aria-label="button.ariaLabel">
              <BaseIcon :icon="button.icon"/>
            </BaseButton>
            <BaseButton class="header__burger-button" :class="{ 'open': isMenuOpen }" tag="button" aria-label="Burger Menu Button" @click="toggleMenu">
              <div class="header__burger-button-inner">
              <span></span>
              </div>
            </BaseButton>
          </div>
        </nav>
      </div>
    </div>
    </div>
    <div class="header__burger-menu" :class="{ 'open': isMenuOpen }" tabindex="-1">
      <div class="container">
        <div class="header__burger-menu-inner">
          <BaseSearch/>
          <div class="header__burger-menu-links">
            <BaseButton
                v-for="(button, index) in burgerMenuLinks"
                :key="index"
                class="header__burger-menu-button"
                tag="RouterLink"
                :to="button.to"
                @click="closeMenu()">
              {{ button.text }}
            </BaseButton>
          </div>

          <div class="header__burger-menu-buttons">
            <BaseButton
                v-for="(button, index) in burgerMenuButtons"
                :key="index"
                class="header__burger-menu-button"
                tag="RouterLink"
                :to="button.to"
                @click="closeMenu()"
                :icon="button.icon">
              {{ button.text }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {BaseButton, BaseIcon, BaseLogo, SearchIcon, CartIcon, UserIcon, BaseSearch, ExitIcon} from "@/shared";
import BaseDropDown from "@/shared/ui/base/sssssdropdown/BaseDropDown.vue";
import {router} from "@/app/providers";

interface NavLink {
  text: string;
  to: string;
}

interface NavButton {
  class?: string;
  icon: typeof SearchIcon | typeof CartIcon | typeof UserIcon;
  tag: 'button' | 'a' | 'RouterLink';
  to?: string;
  ariaLabel: string;
}

interface BurgerMenuButton {
  text: string;
  to: string;
  icon: typeof SearchIcon | typeof CartIcon | typeof UserIcon | typeof ExitIcon;
}

interface BurgerMenuLinks {
  text: string;
  to: string;
}


interface Props {
  borderBottom?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  borderBottom: false
})

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}

function closeMenu() {
  isMenuOpen.value = false;
  document.body.classList.remove('no-scroll');
}

const navLinks: NavLink[] = [
  { text: "Shop", to: { name: "shop"} },
  { text: "Blog", to: "blog" },
  { text: "Our Story", to: "/our-story" },
];

const navButtons: NavButton[] = [
  { class: 'header__search-button', icon: SearchIcon, tag: 'button', ariaLabel: 'Search' },
  { class: 'header__cart-button', icon: CartIcon, tag: 'RouterLink', to: '/cart', ariaLabel: 'Cart' },
  { class: 'header__user-button', icon: UserIcon, tag: 'RouterLink', to: { name: 'sign-in' }, ariaLabel: 'Cabinet' },
];

const burgerMenuLinks: BurgerMenuLinks[] = [
  { text: "Home", to: "/" },
  { text: "Shop", to: "shop" },
  { text: "About", to: "/about" },
  { text: "Blog", to: "/blog" },
  { text: "Help", to: "/help" },
  { text: "Contact", to: "/contact" },
  { text: "Search", to: "/search" },
];

const burgerMenuButtons: BurgerMenuButton[] = [
  { text: "My account", to: { name: 'auth' }, icon: UserIcon },
  { text: "Logout", to: "/logout", icon: ExitIcon },
]
</script>

<style scoped lang="scss">
@import "TheHeader";
</style>
