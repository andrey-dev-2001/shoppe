import { mount } from '@vue/test-utils';
import DropDown from './DropDown.vue';

describe('DropDown', () => {
  it('renders properly', () => {
    const wrapper = mount(DropDown, {});
    expect(wrapper.text()).toContain('Welcome to DropDown');
  });
});
