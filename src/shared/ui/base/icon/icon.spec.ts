import { mount } from '@vue/test-utils';
import BaseIcon from "./BaseIcon.vue";

describe('BaseIcon', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseIcon, {});
    expect(wrapper.text()).toContain('Welcome to Button');
  });
});
