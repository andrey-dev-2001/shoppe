import { mount } from '@vue/test-utils';
import BaseLogo from './BaseLogo.vue';

describe('Logo', () => {
  it('renders properly', () => {
    const wrapper = mount(Logo, {});
    expect(wrapper.text()).toContain('Welcome to Logo');
  });
});
