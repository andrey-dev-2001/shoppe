<template>
  <TheHeader />
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
              <Suspense timeout="0">
                <template #default>
                  <div>
                    <component :is="Component"></component>
                    <TheFooter />
                  </div>
                </template>

                <template #fallback>
                  Loading...
                </template>
              </Suspense>
        </template>
      </RouterView>
</template>

<script setup lang="ts">
import {TheFooter, TheHeader} from "@/widgets";
import { useRoute } from 'vue-router';
import {router} from "@/app/providers";

const route = useRoute();

router.beforeEach((to, from, next) => {
  const metaTitle = to.meta.title;
  const metaDescription = to.meta.metaDescription;

  if (metaTitle) {
    document.title = metaTitle;
  }

  if (metaDescription) {
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', metaDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metaDescription;
      document.head.appendChild(meta);
    }
  }

  next();
});

</script>
