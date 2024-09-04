import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.vue';
import { useRoute } from 'vue-router';

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({
    path: '/',
  })),
}));

describe('App.vue', () => {
  it('повинен рендерити компоненти TheHeader і TheFooter', async () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          TheHeader: true,
          TheFooter: true,
          RouterView: true,
        },
      },
    });

    expect(wrapper.findComponent({ name: 'TheHeader' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'TheFooter' }).exists()).toBe(true);
  });
});
