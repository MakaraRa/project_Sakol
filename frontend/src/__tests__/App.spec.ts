
import { mount, flushPromises } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from '../App.vue'
import UniversitiesView from '../views/UniversitiesView.vue'
import MajorsView from '../views/MajorsView.vue'
import FindMyMajorView from '../views/FindMyMajorView.vue'

describe('App', () => {
  it('mounts and renders the universities page properly', async () => {
    // Create a router specifically for testing
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/universities',
          name: 'universities',
          component: UniversitiesView,
        },
        {
          path: '/majors',
          name: 'majors',
          component: MajorsView,
        },
        {
          path: '/find-my-major',
          name: 'find-my-major',
          component: FindMyMajorView,
        },
      ],
    })

    // Navigate to the universities page
    await router.push('/universities')
    await router.isReady()

    // Mount App with Vue Router installed
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await flushPromises()

    // Check that the correct page is displayed
    expect(wrapper.text()).toContain('Explore Universities')
  })
})
