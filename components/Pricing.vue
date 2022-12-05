<template>
  <div class="bg-gray-100">
    <div class="pt-12 sm:pt-16 lg:pt-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Fees and Availability</h2>
        </div>
      </div>
    </div>
    <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-100" />
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg lg:flex lg:max-w-none">
            <div class="flex-1 bg-white px-6 py-8 lg:p-12">
              <h3 class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">50 minute sessions</h3>
              <p class="mt-6 text-base text-gray-500">After a brief call to determine how I might be able to help, you can book as many sessions you feel you may need.</p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4 class="flex-shrink-0 bg-white pr-4 text-base font-semibold text-pink-400">What's included</h4>
                  <div class="flex-1 border-t-2 border-gray-200" />
                </div>
                <ul role="list" class="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                  <li v-for="feature in includedFeatures" :key="feature" class="flex items-start lg:col-span-1">
                    <div class="flex-shrink-0">
                      <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <p class="ml-3 text-sm text-gray-700">{{ feature }}</p>
                  </li>
                </ul>
              </div>
              <div class="relative mx-auto max-w-2xl px-4 pt-16 text-center">
                <p class="mt-4 text-md text-gray-700">48 hours cancellation notice required</p>
                <p class="mt-4 text-sm text-gray-500"> I reserve the right to charge for any sessions missed without reasonable notice being given</p>
              </div>
            </div>
            <div class="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
              <p class="text-lg font-medium leading-6 text-gray-900">Per Session</p>
              <div class="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                <span>£40</span>
              </div>

              <div class="mt-6">
                <div class="rounded-md shadow">
                  <nuxt-link to="book-session" class="flex items-center justify-center rounded-md border border-transparent bg-yellow-600 hover:text-gray-500 px-5 py-3 text-base font-medium text-white hover:bg-yellow-300">Book a session</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
const includedFeatures = [
  'Face to Face sessions',
  'Over the phone',
  'Internet Conference (Zoom, Skype, Teams)'
]

</script>

<style scoped>

</style>