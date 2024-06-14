<template>

  <main class="w-full max-w-6xl mx-auto py-12 md:py-24 px-4 md:px-6">
    <div class="space-y-8">
      <div class="text-center space-y-2">
        <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          JCI Czech Republic Leadership Team
        </h1>
        <p class="text-gray-500 dark:text-gray-400 max-w-[700px] mx-auto">
          Seznamte se s odhodlanými lidmi, kteří stojí v čele JCI Czech Republic.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div v-for="president in presidents" class=" rounded-lg shadow-sm overflow-hidden bg-neutral text-base-100">
          <div class="p-6 space-y-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                    :src="president.photo"
                    alt="Local President"
                    width="64"
                    height="64"
                    class="rounded-full"
                    style="aspect-ratio: 64 / 64; object-fit: cover;"
                />
              </div>
              <div class="space-y-1">
                <h3 class="text-lg font-semibold">{{ president.name }}</h3>
                <p class=" text-sm ">{{ president.position }}</p>

                <NuxtLink
                    :to="president.linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center space-x-2  text-sm font-medium text-base-100 hover:underline"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>LinkedIn</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

      </div>
      <h1 class="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl w-full text-center pb-10 pt-20">
        Senátoři
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div v-for="president in senators" class=" rounded-lg shadow-sm overflow-hidden bg-primary text-base-100">
          <div class="p-6 space-y-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img
                    :src="president.photo"
                    alt="Local President"
                    width="64"
                    height="64"
                    class="rounded-full"
                    style="aspect-ratio: 64 / 64; object-fit: cover;"
                />
              </div>
              <div class="space-y-1">
                <h3 class="text-lg font-semibold">{{ president.name }}</h3>
                <p class=" text-sm ">{{ president.position }}</p>

                <NuxtLink
                    :to="president.linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center space-x-2  text-sm font-medium text-base-100 hover:underline"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span>LinkedIn</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  </main>
</template>

<script>
export default {
  data() {
    return {
      presidents: [
        {
          name: "Hana Křenková",
          linkedin: "https://www.linkedin.com/in/hanakrenkova/",
          photo: "/hanka.jpeg",
          position: "Národní prezident"
        },
        {
          name: "Zuzana Carbolová",
          linkedin: "https://www.linkedin.com/in/zuzanacarbolova/",
          photo: "/zuzana.jpg",
          position: "Lokální prezident, Prague"
        },
        {
          name: "Andrea Bílá",
          linkedin: "https://www.linkedin.com/in/andrea-bila/",
          photo: "andrejka.jpeg",
          position: "Lokální prezident, Plzeň"
        },
        {
          name: "Jindřich Hrdý",
          linkedin: "https://www.linkedin.com/in/jind%C5%99ichhrd%C3%BD/",
          photo: "jindra.jpg",
          position: "Lokální prezident, České Budějovice"
        }
      ],
      senators: [
        {
          name: "Václav Ševčík",
          linkedin: "https://www.linkedin.com/in/vaclavsevcik/",
          photo: "/vasek.jpg"
        },
        {
          name: "Jana Havlíčková",
          linkedin: "https://www.linkedin.com/in/janahavlickova/",
          photo: "/jana.jpeg"
        },
        {
          name: "Jiří Mauritz",
          linkedin: "https://www.linkedin.com/in/jirimauritz/",
          photo: "/jiri.jpg"
        },
        {
          name: "Miroslav Rys",
          linkedin: "https://www.linkedin.com/in/rysmiroslav/",
          photo: "/mirek.jpg"
        }
        ,
        {
          name: "Votěch Kačírek",
          linkedin: "https://www.linkedin.com/in/vojtech-kacirek-2b07983/",
          photo: "/vojtech.jpg"
        }
      ]


    }
  }
}
</script>