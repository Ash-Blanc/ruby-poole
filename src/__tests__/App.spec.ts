import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('mounts and renders the portfolio site', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          Navbar: true,
          Footer: true,
          HomeView: true
        }
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
