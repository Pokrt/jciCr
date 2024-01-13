<template>
  <section class="bg-base-300">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Full package (double room)</h2>
        <!--          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>-->
        <Countdown/>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <!-- Pricing Card -->
        <!--        <div class="col-start-2 col-span-1">-->
        <!--          <div class="form-control">-->
        <!--            <label class="label cursor-pointer">-->
        <!--              <span class="label-text text-xl text-white">Show JCI member prices</span>-->
        <!--              <input type="checkbox" v-model="this.jciMember" class="toggle toggle-primary "/>-->
        <!--            </label>-->
        <!--          </div>-->
        <!--        </div>-->

        <div
            class=" flex-col col-start-1 p-6 mx-auto max-w-lg text-center text-white bg-base-100 rounded-lg border border-gray-100 shadow  xl:p-8 hidden lg:flex">
          <h3 class="mb-4 text-2xl font-semibold">Early Bird</h3>
          <!--          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next-->
          <!--            project.</p>-->
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold">€{{ prices[0] }} </span>
            <!--            <span class="text-gray-500 dark:text-gray-400">/month</span>-->
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li v-for="item in this.features" class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div
            class=" flex-col p-6 mx-auto max-w-lg text-center text-white bg-base-100 rounded-lg border border-gray-100 shadow  xl:p-8 hidden lg:flex">
          <h3 class="mb-4 text-2xl font-semibold">Regular Bird</h3>
          <!--          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next-->
          <!--            project.</p>-->
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold">€{{ prices[1] }} </span>
            <!--            <span class="text-gray-500 dark:text-gray-400">/month</span>-->
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li v-for="item in this.features" class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>


        </div>


        <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-base-100 rounded-lg border border-gray-100 shadow  xl:p-8">
          <h3 class="mb-4 text-2xl font-semibold">Late Bird</h3>
          <!--          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next-->
          <!--            project.</p>-->
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold">€{{ prices[2] }} </span>
            <!--            <span class="text-gray-500 dark:text-gray-400">/month</span>-->
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li v-for="item in this.features" class="flex items-center space-x-3">
              <!-- Icon -->
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
           <a href="https://share.hsforms.com/1y_NTmREWQ8akIKohI8XkXg5irbi"
             class=" btn-primary btn">Get
            started</a>
        </div>

        <div class="alert flex flex-col col-span-3 border border-gray-100 shadow ">
          <span class="mr-2 text-5xl font-extrabold">+€100</span>
          <span>for accommodation in single bed room</span><span>Please note your preference in application form
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Tickets',
  data() {
    return {
      jciMember: true,
      memberPrices: [449, 499, 549],
      features:
          ["Accommodation (3 nights - double room)",
            "Breakfasts (3)",
            "Airport transfer to hotel (only for arrival on 8th of February and departure on 11th of February)",
            "Lunches (2)",
            "3x dinners",
            "Gala cocktail",
            "Coffee Breaks",
            "All sessions",
            "Networking and social events"],
    }
  },
  computed: {
    prices() {
      return this.memberPrices.map(price => {
        return this.jciMember ? price : price + 50
      })
    }
  }
}
</script>