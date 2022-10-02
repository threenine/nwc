<template>
  <div>
    <twc-hero/>

    <div class="relative bg-gray-50 py-24 sm:py-40">

      <div class="container mx-auto">
        <div
            class="pointer-events-none absolute -top-4 right-full -mr-14 hidden w-1/2 origin-top-right rotate-12 xl:block">
          <div class="aspect-w-4 aspect-h-5">
            <div>
              <div class="absolute top-0 left-[-200%] -right-1/4 h-px opacity-30"
                   style="background-image:linear-gradient(to right, rgba(148, 163, 184, 0) 33%, rgb(148, 163, 184) 80%, rgba(148, 163, 184, 0) 100%)"></div>
              <div class="absolute top-[-125%] right-0 -bottom-1/3 w-px opacity-30"
                   style="background-image:radial-gradient(closest-corner at 50% 66%, rgb(148, 163, 184), rgba(148, 163, 184, 0))"></div>
              <div class="absolute bottom-0 left-[-200%] -right-1/2 h-px opacity-30"
                   style="background-image:linear-gradient(to right, rgba(148, 163, 184, 0) 33%, rgb(148, 163, 184) 80%, rgba(148, 163, 184, 0) 100%)"></div>
              <div class="absolute top-[-100%] left-0 -bottom-1/2 w-px opacity-30"
                   style="background-image:radial-gradient(closest-corner at 50% 66%, rgb(148, 163, 184), rgba(148, 163, 184, 0))"></div>
              <div
                  class="absolute top-[-0.5px] left-0 h-[2px] w-28 -translate-x-1/3 rounded-full bg-gradient-to-r from-blue-500"></div>
              <div
                  class="absolute bottom-[-0.5px] right-0 h-[2px] w-28 translate-x-4 rounded-full bg-gradient-to-l from-violet-400"></div>
            </div>
          </div>
        </div>

        <h3 class="text-center text-yellow-500 text-2xl leading-[1.2] tracking-tighter sm:text-[3.5rem] sm:leading-[4.5rem]">
          Natasha Woodfine </h3>
        <h4 class="text-center text-1xl leading-[1.2] tracking-tighter text-gray-800 sm:text-[2.5rem] sm:leading-[3.5rem]">
          Professional Counsellor</h4>
        <div class="columns-2 gap-8 mt-5">
          <div class="space-y-8 text-lg leading-8">
            <p v-for="item in benefits1" class="flex text-3xl -mx-2 text-slate-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-8 h-8 mx-2 text-yellow-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"/>
              </svg>
              <span class="mx-2 font-medium"> {{ item.benefit }}</span></p>
          </div>
          <div class="space-y-8 text-lg leading-8">
            <p v-for="item in benefits2" class="flex text-3xl -mx-2 text-slate-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-8 h-8 mx-2 text-yellow-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"/>
              </svg>
              <span class="mx-2 font-medium"> {{ item.benefit }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>

const benefits1 = [
  {benefit: "Unearth your potential"},
  {benefit: "Understand your real power"},
  {benefit: "Find your purpose and value"},
]

const benefits2 = [
  {benefit: "Understand and discover change"},
  {benefit: "Overcome depression"},
  {benefit: "Self Compassion"},
]

</script>
