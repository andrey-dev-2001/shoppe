import { mount } from '@vue/test-utils';
import BaseSearch from './BaseSearch.vue';

describe('BaseSearch', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseSearch, {});
    expect(wrapper.text()).toContain('Welcome to BaseSearch');
  });
});
