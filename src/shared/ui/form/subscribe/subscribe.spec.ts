import { mount } from '@vue/test-utils';
import FormSubscribe from './FormSubscribe.vue';

describe('FormSubscribe', () => {
  it('renders properly', () => {
    const wrapper = mount(FormSubscribe, {});
    expect(wrapper.text()).toContain('Welcome to FormSubscribe');
  });
});
