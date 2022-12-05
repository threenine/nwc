<template>
  <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
    <aside class="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
      <nav class="space-y-1">
        <a v-for="item in navigation" :key="item.name" :href="item.href"
           :class="[item.current ? 'bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white' : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50', 'group rounded-md px-3 py-2 flex items-center text-sm font-medium']"
           :aria-current="item.current ? 'page' : undefined">
          <component :is="item.icon"
                     :class="[item.current ? 'text-indigo-500 group-hover:text-indigo-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']"
                     aria-hidden="true"/>
          <span class="truncate">{{ item.name }}</span>
        </a>
      </nav>
    </aside>

    <div class="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
      <form action="#" method="POST">
        <div class="shadow sm:overflow-hidden sm:rounded-md">
          <div class="space-y-6 bg-white py-6 px-4 sm:p-6">
            <div>
              <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            </div>

            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                       class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                       class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email-address" id="email-address" autocomplete="email"
                       class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
              </div>


              <div class="col-span-6 sm:col-span-4">
                <label for="street-address" class="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input type="text" name="street-address" id="street-address" autocomplete="street-address"
                       class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
              </div>


            </div>
          </div>
          <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="space-y-6 bg-white py-6 px-4 sm:p-6">

              <fieldset class="mt-6">
                <legend class="text-base font-medium text-gray-900">Session Type</legend>
                <div class="mt-4 space-y-4">
                  <div class="flex items-center">
                    <input id="push-everything" name="push-notifications" type="radio"
                           class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="push-everything" class="ml-3">
                      <span class="block text-sm font-medium text-gray-700">Face to Face</span>
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="push-email" name="push-notifications" type="radio"
                           class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="push-email" class="ml-3">
                      <span class="block text-sm font-medium text-gray-700">Web Conference</span>
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="push-nothing" name="push-notifications" type="radio"
                           class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                    <label for="push-nothing" class="ml-3">
                      <span class="block text-sm font-medium text-gray-700">Telephone</span>
                    </label>
                  </div>


                </div>
              </fieldset>
            </div>
          </div>
          <div class="shadow sm:overflow-hidden sm:rounded-md">
            <div class="space-y-6 bg-white py-6 px-4 sm:p-6">
              <fieldset class="mt-6">
                <legend class="text-base font-medium text-gray-900">More about you</legend>
                <div class="flex items-center">

<TextArea
    type="text"
    as="textarea"
    name="message"
    placeholder="How can I help"
    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
/>


                </div>
              </fieldset>
            </div>
          </div>


          <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit"
                    class="inline-flex justify-center rounded-md border border-transparent bg-yellow-600 py-2 px-4 text-sm font-medium text-gray-100 hover:text-gray-500 shadow-sm hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
              Book
            </button>
          </div>
        </div>
      </form>

    </div>
  </div>
</template>

<script lang="ts" setup>


</script>



