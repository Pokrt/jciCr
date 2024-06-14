

<template>

  <section class="w-full py-12 md:py-24 lg:py-32 grid place-items-center">
    <div class="container grid gap-6 md:gap-8 px-4 md:px-6">
      <div class="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <div class="grid gap-1">
          <h1 class="text-2xl font-bold tracking-tight">Projekty členů JCI pro svět v praxi</h1>
          <p class="text-gray-500 dark:text-gray-400">Podívejte se na naše aktuální projekty a zapojte se.</p>
        </div>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="grid gap-4 relative group">
          <a class="absolute inset-0 z-10" href="#">
            <span class="sr-only">View Bussiness kotel</span>
          </a>
          <img
              alt="Bussiness kotel"
              class="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
              height="300"
              src="/logo-PBK.svg"
              width="450"
          />
          <div class="grid gap-1">
            <h3 class="font-semibold">Bussiness kotel</h3>
            <p class="text-sm leading-none">Platforma pro propojení a podporu aktivních komunit.</p>
          </div>
          <p class="font-semibold underline underline-offset-4">Více informací</p>
        </div>
        <div class="grid gap-4 relative group">
          <a class="absolute inset-0 z-10" href="#">
            <span class="sr-only">View Vánoční krabice</span>
          </a>
          <img
              alt="Vánoční krabice"
              class="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
              height="300"
              src="/krabice_2.jpg"
              width="450"
          />
          <div class="grid gap-1">
            <h3 class="font-semibold">Vánoční krabice</h3>
            <p class="text-sm leading-none">
              Podpora dětí ze sociálně slabších rodin v Praze, Středočeském, Jihočeském a Plzeňském kraji.
            </p>
          </div>
          <p class="font-semibold underline underline-offset-4">Více informací</p>
        </div>
        <div class="grid gap-4 relative group">
          <a class="absolute inset-0 z-10" href="#">
            <span class="sr-only">View Vánoční krabice</span>
          </a>
          <img
              alt="Setkání mladých lídrů"
              class="rounded-lg object-cover w-full aspect-[3/2] group-hover:opacity-50 transition-opacity"
              height="300"
              src="/zceko.jpg"
              width="450"
          />
          <div class="grid gap-1">
            <h3 class="font-semibold">Setkání mladých lídrů
            </h3>
            <p class="text-sm leading-none">
              Setkání (budoucích) leaderů je každoroční vzdělávací akce pro mladé leadery.
            </p>
          </div>
          <p class="font-semibold underline underline-offset-4">Více informací</p>
        </div>
      </div>
    </div>
  </section>


  <section class="w-full py-12 md:py-24 lg:py-32 bg-primary  grid place-items-center text-base-100">
    <div class="container px-4 md:px-6">
      <div class="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
        <div class="space-y-4">
          <div class="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white ">Bussiness kotel
          </div>
          <h2 class="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Platforma pro propojení a podporu plzeňských aktivních komunit
          </h2>
          <div class="prose text-base-100">
            <p>
              Bussiness kotel je platforma, která funguje ve třech českých krajských městech. Podporuje setkávání
              začínajících i zkušených podnikatelů, startupistů, studentů a všech, kteří se zajímají o svět podnikání,
              chtějí podnikat nebo získat inspiraci a nové kontakty.
            </p>
          </div>
          <a
              class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral"
              href="#"
          >
            Více informací &amp; termíny akcí
          </a>
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
          <a
              class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral"
              href="#"
          >
            Více informací
          </a>
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
          <a class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral" href="https://www.jci-czeko.cz/">
            Více informací
          </a>
          <img src="/czeko-2.jpg" alt="Setkání (budoucích) leaderů" width="450" height="300"
               class="rounded-lg object-cover" style="aspect-ratio:450/300;object-fit:cover"/>
        </div>


      </div>
    </div>
  </section>
</template>
