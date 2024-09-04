import { mount } from '@vue/test-utils';
import BaseButton from './BaseDropDown.vue';

describe('BaseButton', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseButton, {});
    expect(wrapper.text()).toContain('Welcome to Button');
  });
});
