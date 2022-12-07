<template>
  <div class="overflow-hidden bg-white">
    <div class="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div class="absolute top-0 bottom-0 left-3/4 hidden w-screen lg:block"/>
      <div class="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 class="text-lg font-semibold text-gray-600">Contact Me</h2>
          <h3 class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Natasha Woodfine</h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:col-start-2 lg:row-start-1">

          <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">

                <img class="lg:rounded-lg h-32 w-32 rounded-full object-cover object-center shadow-lg"
                     src="~/assets/img/natasha-woodfine.jpg" alt="Natasha Woodfine"/>
              </div>


            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
           <ContactForm />

          </div>

        </div>
      </div>
    </div>
    <pricing />
  </div>
</template>

<script lang="ts" setup>

</script>

