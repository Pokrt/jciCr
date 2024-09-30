<template>
  <section class="w-full py-12 md:py-24 lg:py-32 bg-primary  grid place-items-center text-base-100">

    <div class="container px-4 md:px-6">
      <div class="grid gap-10 sm:px-10 md:gap-16 grid-cols-1 lg:grid-cols-2">
        <div class="space-y-4 grid-span-1 lg:col-span-2">
          <h2 class="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Projekty členů JCI mají dopad!
          </h2>
        </div>

        <div class="space-y-4">
          <div class="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white ">Business kotel
          </div>
          <h2 class="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Platforma pro otevřenou diskuzi o business tématech
          </h2>
          <div class="prose text-base-100">
            <p>
              Bussiness kotel je platforma, která funguje ve třech českých krajských městech. Podporuje setkávání
              začínajících i zkušených podnikatelů, startupistů, studentů a všech, kteří se zajímají o svět podnikání,
              chtějí podnikat nebo získat inspiraci a nové kontakty.
            </p>
          </div>
          <NuxtLink
              class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral"
              to="https://www.businesskotel.cz/"
          >
            Více informací &amp; termíny akcí
          </NuxtLink>
          <img
              src="/pbk.jpg"
              alt="Bussiness kotel"
              width="450"
              height="300"
              class="rounded-lg object-cover"
              style="aspect-ratio:450/300;object-fit:cover"
          />
        </div>
        <div class="space-y-4">
          <div class="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white ">Vánoční krabice
          </div>
          <h2 class="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Podpora dětí ze sociálně slabších rodin
          </h2>
          <div class="prose text-base-100">
            <p>
              Projekt Vánoční krabice má za cíl podpořit děti ze sociálně slabších rodin v Praze, Středočeském,
              Jihočeském a Plzeňském kraji. Zjednodušuje proces obdarování tak, aby dárci vybírali dárky pro konkrétní
              děti určitého věku a pohlaví a děti následně nalezly pod stromečkem to, co si přejí.
            </p>
          </div>
          <NuxtLink
              class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral"
              to="https://krabice.jcicr.cz/"
          >
            Více informací
          </NuxtLink>
          <div class="grid grid-cols-2 gap-4">
            <img
                src="/krabice_3.jpg"
                alt="Vánoční krabice"
                width="300"
                height="200"
                class="rounded-lg object-cover"
                style="aspect-ratio:300/200;object-fit:cover"
            />
            <img
                src="/krabice_4.jpg"
                alt="Vánoční krabice"
                width="300"
                height="200"
                class="rounded-lg object-cover"
                style="aspect-ratio:300/200;object-fit:cover"
            />
          </div>
        </div>

        <div class="space-y-4">
          <div class="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white">
            Setkání (budoucích) leaderů
          </div>
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:leading-tighter xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Vzdělávací akce pro mladé leadery
          </h2>
          <div class="prose text-base-100">
            <p>
              Setkání (budoucích) leaderů je každoroční vzdělávací akce pro mladé leadery, kteří posouvají sebe, své
              týmy, projekty i celé firmy. Několika denní program se skládá z praktických workshopů, řízeného
              networkingu, školení i kulturního programu. Akci tradičně navštěvují mladí leadeři z okolních států.
            </p>
          </div>
          <NuxtLink class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral" to="https://www.jci-czeko.cz/">
            Více informací
          </NuxtLink>
          <img src="/czeko-2.jpg" alt="Setkání (budoucích) leaderů" width="450" height="300"
               class="rounded-lg object-cover" style="aspect-ratio:450/300;object-fit:cover"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>