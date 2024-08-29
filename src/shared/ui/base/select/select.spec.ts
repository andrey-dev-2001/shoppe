import { mount } from '@vue/test-utils';
import BaseSelect from './BaseSelect.vue';

describe('BaseSelect', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseSelect, {});
    expect(wrapper.text()).toContain('BaseSelect');
  });
});
