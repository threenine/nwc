<template>
  <footer class="bg-gray-800" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base font-medium text-white">Services</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.services" :key="item.name">
                  <nuxt-link :to="item.href" class="text-base text-gray-300 hover:text-white">{{ item.name }}</nuxt-link>
                </li>
              </ul>
            </div>

          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base font-medium text-white">Find out more</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.about" :key="item.name">
                  <nuxt-link :to="item.href" class="text-base text-gray-300 hover:text-white">{{ item.name }}</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-base font-medium text-white">Legal</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <nuxt-link :to="item.href" class="text-base text-gray-300 hover:text-white">{{ item.name }}</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <div class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
        <div class="flex space-x-6 md:order-2">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-8 text-base text-gray-400 md:order-1 md:mt-0">&copy Natasha Woodfine Counselling - All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const navigation = {
  services: [
    { name: 'Counselling', href: '/' },

  ],
  about: [
    { name: 'About Me', href: '../about' },

  ],
  legal: [
    { name: 'Privacy', href: '../legal/privacy' },
    { name: 'Terms', href: '../legal/terms' },
  ],
  social: [

    {
      name: 'Twitter',
      href: 'https://twitter.com/threenine39',
      icon: defineComponent({
        render: () =>
            h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
              h('path', {
                d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
              }),
            ]),
      }),
    }
  ],
}
</script>
