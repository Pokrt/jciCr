<template>
  <section class="bg-neutral-focus">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">Gala Cocktail tickets</h2>
        <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-white">10. February 2024</h2>
      </div>
      <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <div class="grid p-6 mx-auto max-w-lg text-center text-white bg-base-100 rounded-lg  border border-gray-100 shadow  xl:p-8">
          <div
              class="flex flex-col col-start-1 ">
            <h3 class="mb-4 text-2xl font-semibold">Late ticket</h3>
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

          <a href="https://share.hsforms.com/1gcHRIJpoTnWdFLDtrO6S8A5irbi"
             class=" btn-primary btn xl:self-end ">Get ticket</a>
        </div>
        <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-base-100 rounded-lg  shadow border border-gray-100 xl:p-8">
          <h3 class="mb-4 text-2xl font-semibold">VIP Ticket SINGLE</h3>
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
            <li v-for="item in this.bonusFeatures" class="flex items-center space-x-3">
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
 <a href="https://share.hsforms.com/1gcHRIJpoTnWdFLDtrO6S8A5irbi"
             class=" btn-primary btn">Get
            ticket</a>
        </div>


        <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center text-white bg-base-100 rounded-lg  border border-gray-100 shadow  xl:p-8">
          <h3 class="mb-4 text-2xl font-semibold">VIP Ticket DOUBLE</h3>
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold">€{{ prices[2] }} </span>
          </div>
          <!-- List -->
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li v-for="item in this.features" class="flex items-center space-x-3">
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
              </svg>
              <span>{{ item }}</span>
            </li>
            <li v-for="item in this.bonusFeatures" class="flex items-center space-x-3">
              <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                   viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"></path>
              </svg>
              <span>{{ item }}</span>
            </li>

          </ul>
          <a href="https://share.hsforms.com/1gcHRIJpoTnWdFLDtrO6S8A5irbi"
             class=" btn-primary btn">Get
            ticket</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TicketsGala',
  data() {
    return {
      jciMember: true,
      memberPrices: [200, 250, 400],
      features:
          [
            "Gala Cocktail entrance",
            "Welcome drink",
            "Light refreshment & drinks",
            "Access to not public areas of Prague Castle",
            "Unique panoramic view of Prague",
            "Official program & entertainment"
          ],
      bonusFeatures:
          [
            "Fast track",
            "Access to VIP lounge ",
            "Bottle of Luxury Lobkowicz Sekt"
          ]
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