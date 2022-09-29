<template>

  <div class="relative">
    <div class="absolute inset-0">
      <img class="h-full w-full object-cover" src="~/assets/img/sunflowers.jpg" alt="threenine.co.uk privacy policy" />
      <div class="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
    </div>
    <div class="relative container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div class="w-full lg:w-1/2">
        <div class="lg:max-w-lg">
          <h1 class="text-2xl font-bold tracking-wide text-gray-100 lg:text-5xl">
            One-to-One Counselling
          </h1>

          <div class="mt-8 space-y-5">
            <p v-for="item in benefits" class="flex items-center -mx-2 text-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <span class="mx-2">{{ item.benefit }}</span>
            </p>

          </div>
        </div>

        <div class="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm border-gray-700 focus-within:border-yellow-400 focus-within:ring focus-within:ring-yellow-300 dark:focus-within:border-yellow-400 focus-within:ring-opacity-40">
          <form class="flex flex-col lg:flex-row">
            <input type="email" placeholder="Enter your email address" class="flex-1 h-10 px-4 py-2 m-1  placeholder-gray-200 bg-transparent border-yellow-100 appearance-none text-gray-800 focus:outline-none focus:placeholder-transparent focus:ring-0" />

            <button type="button" class="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-yellow-600 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400">
              Join Us
            </button>
          </form>
        </div>
      </div>

      <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo">
      </div>
    </div>
  </div>

</template>

<script setup>

const benefits = [
  {
    benefit: "Improve your mental health"
  },
  {
    benefit: "Therapeutic approaches"
  },
  {
    benefit: "Work through challenges at your own pace"
  },

]
</script>

<style scoped>

</style>
