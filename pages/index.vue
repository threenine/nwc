<template>
  <div>
    <twc-hero/>
    <div class="relative flex min-h-screen flex-col">


      <!-- 3 column wrapper -->
      <div class="mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8">
        <!-- Left sidebar & main wrapper -->
        <div class="min-w-0 flex-1 bg-white xl:flex">


          <div class="bg-white lg:min-w-0 lg:flex-1">
            <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
              <!-- Start main area-->
              <div class="relative h-full" style="min-height: 36rem">
                <div class="prose prose-md text-lg text-gray-500 prose-slate prose-headings:text-yellow-500 prose-a:no-underline  prose-headings:text-2xl prose-a:text-yellow-500">
                  <ContentDoc path="/pages/home" />

                </div>
                <pricing />
              </div>
              <!-- End main area -->
            </div>
          </div>
        </div>

        <div class="pr-4 sm:pr-6 lg:flex-shrink-0 lg:pr-8 xl:pr-0">
          <div class="h-full py-6 pl-6 lg:w-80">
            <!-- Start right column area -->
            <div class="relative h-full" style="min-height: 16rem">
              <div class="absolute inset-0  " >

                <profile-card/>
                <div class="text-center bg-yellow-100 p-2 rounded-lg mt-3">
                  <span>Enquire about a session</span>
                  <contact-form />
                </div>

              </div>

            </div>
            <div >

            </div>
            <!-- End right column area -->
          </div>
        </div>
      </div>
    </div>

      </div>

</template>


<script lang="ts" setup>


</script>
