<template>
  <section class="w-full py-12 md:py-24 lg:py-32 grid place-items-center bg-primary text-base-100">
    <div class="container grid gap-4 px-4 md:px-6">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">Naše pobočky</h2>
        <p class="">
          Podívejte se na naše stávající pobočky a zjistěte, jak se můžete zapojit.
        </p>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="branch in branches" class="rounded-lg  border-base-100 border  p-6 shadow-sm ">
          <h3 class="text-xl font-semibold">{{ branch.name }}</h3>
          <div class="mt-4 flex items-center space-x-2">
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
                class="h-5 w-5 "
            >
              <line x1="2" x2="5" y1="12" y2="12"></line>
              <line x1="19" x2="22" y1="12" y2="12"></line>
              <line x1="12" x2="12" y1="2" y2="5"></line>
              <line x1="12" x2="12" y1="19" y2="22"></line>
              <circle cx="12" cy="12" r="7"></circle>
            </svg>
            <span class="text-sm ">{{ branch.address }}</span>
          </div>
          <div class="mt-2 flex items-center space-x-2">
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
                class="h-5 w-5 "
            >
            </svg>
            <span class="text-sm ">IČO: {{ branch.ICO }}</span>
          </div>
          <div class="mt-2 flex items-center space-x-2">
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
                class="h-5 w-5 "
            >

            </svg>
            <span class="text-sm ">DIČ: {{ branch.DIC }}</span>
          </div>
          <div class="mt-2 flex items-center space-x-2">
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
                class="h-5 w-5 "
            >

            </svg>
            <span class="text-sm ">Email: <a class="link" :href="'mailto:' + branch.email">{{ branch.email }}</a></span>
          </div>
          <div class="mt-2 flex items-center space-x-2">
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
                class="h-5 w-5 "
            >

            </svg>
            <span class="text-sm ">Bankovní účet: {{ branch.bank_account }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="w-full py-12 md:py-24 lg:py-32 bg-neutral text-base-100  grid place-items-center">
    <div class="container grid gap-8 px-4 md:px-6">
      <div class="space-y-4">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">Založte si vlastní pobočku</h2>
        <p class="">
          Pokud chcete založit pobočku ve vašem městě, kontaktujte Národního Prezidenta JCI Czech Republic. Rádi vám
          pomůžeme s procesem založení a podporou vaší místní pobočky.
        </p>
      </div>
      <div class="flex justify-center">
        <a
            class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral" href="mailto:info@jcicr.cz"
        >
          Kontaktujte Národního Prezidenta
        </a>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  data() {
    return {
      branches: [
        {
          "name": "JCI Czech Republic",
          "address": "Václavské náměstí 795/40, Praha 1, 110 00",
          "ICO": "22885498",
          "DIC": "nejsme plátci DPH",
          "email": "info@jcicr.cz",
          "bank_account": "2700242309 / 2010"
        },
        {
          "name": "JCI South Bohemia",
          "address": "Husova tř. 1846/9, České Budějovice, 371 01",
          "ICO": "22841601",
          "DIC": "nejsme plátci DPH",
          "email": "budejovice@jcicr.cz",
          "bank_account": "2300599907 / 2010"
        },
        {
          "name": "JCI Pilsen",
          "address": "Šafaříkovy sady 2455/5, Plzeň, 301 00",
          "ICO": "22710973",
          "DIC": "nejsme plátci DPH",
          "email": "pilsen@jcicr.cz",
          "bank_account": "2700355952 / 2010"
        },
        {
          "name": "JCI Prague",
          "address": "Štěpánská 617/26, Praha 1, 110 00",
          "ICO": "02506955",
          "DIC": "nejsme plátci DPH",
          "email": "prague@jcicr.cz",
          "bank_account": "2100549518 / 2010"
        }
      ]

    }
  },
}
</script>