import { mount } from '@vue/test-utils';
import BaseField from './BaseField.vue';

describe('BaseField', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseField, {});
    expect(wrapper.text()).toContain('Welcome to BaseField');
  });
});
