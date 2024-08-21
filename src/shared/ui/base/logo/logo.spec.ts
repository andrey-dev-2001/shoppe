import { mount } from '@vue/test-utils';
import BaseLogo from './BaseLogo.vue';

describe('BaseLogo', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseLogo, {});
    expect(wrapper.text()).toContain('Welcome to Logo');
  });
});
