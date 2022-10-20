<template>
  <div class="overflow-hidden bg-white">
    <div class="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div class="absolute top-0 bottom-0 left-3/4 hidden w-screen lg:block" />
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

                <img class="rounded-lg object-cover object-center shadow-lg" src="~/assets/img/natasha-woodfine.jpg" alt="Natasha Woodfine" />
              </div>
              <figcaption class="mt-3 flex text-sm text-gray-500">
                <span class="ml-2">Natasha Woodfine</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
           <div class="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
             <form action="#" method="POST" class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
               <div>
                 <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                 <div class="mt-1">
                   <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm" />
                 </div>
               </div>
               <div>
                 <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                 <div class="mt-1">
                   <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm" />
                 </div>
               </div>
               <div class="sm:col-span-2">
                 <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                 <div class="mt-1">
                   <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm" />
                 </div>
               </div>


               <div class="sm:col-span-2">
                 <div class="flex justify-between">
                   <label for="how-can-we-help" class="block text-sm font-medium text-gray-700">How can I help you?</label>
                   <span id="how-can-we-help-description" class="text-sm text-gray-500">Max. 500 characters</span>
                 </div>
                 <div class="mt-1">
                   <textarea id="how-can-we-help" name="how-can-we-help" aria-describedby="how-can-we-help-description" rows="4" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm" />
                 </div>
               </div>
               <div class="text-right sm:col-span-2">
                 <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-gray-100 shadow-sm hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2">Submit</button>
               </div>
             </form>

          </div>
          <div class="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            <span  class="text-2xl font-bold">Fees and Availability </span>
            <p>Sessions are £45 and last 50 minutes. Normally, I like to have a brief call with you before our first session to discuss how I might be able to help.</p>
            <p>I accept payment via bank transfer or contactless card payment.</p>
            <p>Please note that if you wish to cancel an appointment, I require 48 hours’ notice. I reserve the right to charge for any sessions missed without reasonable notice being given.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>




<script>
export default {
  name: "contact"
}
</script>

<style scoped>

</style>
