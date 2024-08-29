import { mount } from '@vue/test-utils';
import BaseInput from './BaseInput.vue';

describe('BaseInput', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseInput, {});
    expect(wrapper.text()).toContain('BaseInput');
  });
});
