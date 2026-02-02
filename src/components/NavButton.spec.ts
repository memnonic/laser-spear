import { describe, expect, it } from 'vitest'
import NavButton from '@/components/NavButton.vue'
import { mount } from '@vue/test-utils'
import { Quasar } from 'quasar'
import { createRouterMock } from 'vue-router-mock'

function createWrapper() {
  return mount(NavButton, {
    props: {
      icon: 'test',
      text: 'test',
      to: '/test',
    },
    global: {
      plugins: [createRouterMock(), Quasar],
    },
  })
}

describe('NavButton', () => {
  it('mounts and renders', () => {
    const wrapper = createWrapper()
    expect(wrapper.exists()).toBe(true);
  })

  it('should render text as in props', () => {
    const wrapper = createWrapper();

    const text = wrapper.find('.nav-button__subtitle').text();

    expect(text).toEqual('test');
  })

  it('should render icon as in props', () => {
    const wrapper = createWrapper();

    const icon = wrapper.find('.q-icon').text();

    expect(icon).toEqual('test');
  })

  it('should navigate to location specified in props', () => {
    const wrapper = createWrapper();

    wrapper.trigger('click');

    expect(wrapper.vm.$router.push).toHaveBeenCalledWith('/test');
  })
})
