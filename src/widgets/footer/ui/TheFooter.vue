<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__info">
          <div class="footer__nav">
            <BaseButton
                v-for="(link, index) in footerLinks"
                :key="index"
                class="footer__nav-link"
                tag="RouterLink"
                :to="link.to"
            >
              {{ link.label }}
            </BaseButton>
          </div>

          <div class="footer__subscribe">
            <FormSubscribe/>
          </div>
        </div>

        <div class="footer__social-copy">
          <div class="footer__copyright">
            © {{ new Date().getFullYear() }} Shelly.
            <BaseButton class="footer__copyright-link" tag="RouterLink" to="terms">Terms of use</BaseButton>
            and
            <BaseButton class="footer__copyright-link" tag="RouterLink" to="privacy-policy">privacy policy</BaseButton>.
          </div>

          <div class="footer__social-links">
            <BaseButton
                v-for="(link, index) in socialLinks"
                :key="index"
                class="footer__social-link"
                tag="a"
                :href="link.href"
                :icon="link.icon"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {BaseButton, FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon} from "@/shared";
import FormSubscribe from "@/shared/ui/form/subscribe/FormSubscribe.vue";

const footerLinks = [
  { label: 'CONTACT', to: 'contact' },
  { label: 'TERMS OF SERVICES', to: 'terms' },
  { label: 'SHIPPING AND RETURNS', to: 'shipping-and-returns' }
]

const socialLinks = [
  { href: "https://www.linkedin.com/w", icon: LinkedinIcon },
  { href: "https://www.facebook.com/", icon: FacebookIcon },
  { href: "https://www.instagram.com/", icon: InstagramIcon },
  { href: "https://x.com/", icon: TwitterIcon },
]
</script>

<style scoped lang="scss">
@import "TheFooter";
</style>
