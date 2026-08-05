<template>
  <PageHero lead="Reálné projekty, které propojují lidi napříč obory, rozvíjejí leadership a mění naše komunity k lepšímu.">
    <template #title>Projekty členů JCI mají <span class="text-jci-blue">dopad</span>.</template>
  </PageHero>

  <section class="w-full bg-base-100 py-16 md:py-24 lg:py-28">
    <div class="mx-auto flex max-w-6xl flex-col gap-16 px-4 md:gap-24 md:px-6">

      <article class="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <span class="inline-flex rounded-full bg-jci-blue/10 px-3 py-1 text-sm font-semibold text-jci-blue">Business kotel</span>
          <h2 class="mt-4 text-balance font-bold tracking-[-0.02em] text-jci-black text-[clamp(1.55rem,3vw,2.35rem)]">
            Platforma pro otevřenou diskuzi o business tématech
          </h2>
          <p class="mt-4 max-w-[52ch] leading-relaxed text-base-content/75">
            Business kotel je platforma, která funguje ve třech českých krajských městech. Podporuje setkávání
            začínajících i zkušených podnikatelů, startupistů, studentů a všech, kteří se zajímají o svět podnikání,
            chtějí podnikat nebo získat inspiraci a nové kontakty.
          </p>
          <NuxtLink to="https://www.businesskotel.cz/"
                    class="btn btn-primary mt-6 h-12 rounded-full border-0 px-7 text-base text-white shadow-lg shadow-jci-blue/25">
            Více informací &amp; termíny akcí
          </NuxtLink>
        </div>
        <img src="/pbk.jpg" alt="Business kotel" width="600" height="400"
             class="aspect-[3/2] w-full rounded-3xl object-cover shadow-xl shadow-jci-navy/10" />
      </article>

      <article class="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div class="lg:order-last">
          <span class="inline-flex rounded-full bg-jci-teal/15 px-3 py-1 text-sm font-semibold text-[#2c8a8a]">Vánoční krabice</span>
          <h2 class="mt-4 text-balance font-bold tracking-[-0.02em] text-jci-black text-[clamp(1.55rem,3vw,2.35rem)]">
            Podpora dětí ze sociálně slabších rodin
          </h2>
          <p class="mt-4 max-w-[52ch] leading-relaxed text-base-content/75">
            Projekt Vánoční krabice má za cíl podpořit děti ze sociálně slabších rodin v Praze, Středočeském,
            Jihočeském a Plzeňském kraji. Zjednodušuje proces obdarování tak, aby dárci vybírali dárky pro konkrétní
            děti určitého věku a pohlaví a děti následně nalezly pod stromečkem to, co si přejí.
          </p>
          <NuxtLink to="https://krabice.jcicr.cz/"
                    class="btn btn-primary mt-6 h-12 rounded-full border-0 px-7 text-base text-white shadow-lg shadow-jci-blue/25">
            Více informací
          </NuxtLink>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <img src="/krabice_3.jpg" alt="Vánoční krabice" width="300" height="380"
               class="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg shadow-jci-navy/10" />
          <img src="/krabice_4.jpg" alt="Vánoční krabice" width="300" height="380"
               class="mt-8 aspect-[3/4] w-full rounded-2xl object-cover shadow-lg shadow-jci-navy/10" />
        </div>
      </article>

      <article class="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <span class="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">Setkání (budoucích) leaderů</span>
          <h2 class="mt-4 text-balance font-bold tracking-[-0.02em] text-jci-black text-[clamp(1.55rem,3vw,2.35rem)]">
            Vzdělávací akce pro mladé leadery
          </h2>
          <p class="mt-4 max-w-[52ch] leading-relaxed text-base-content/75">
            Setkání (budoucích) leaderů je každoroční vzdělávací akce pro mladé leadery, kteří posouvají sebe, své
            týmy, projekty i celé firmy. Několikadenní program se skládá z praktických workshopů, řízeného
            networkingu, školení i kulturního programu. Akci tradičně navštěvují mladí leadeři z okolních států.
          </p>
          <NuxtLink to="https://www.jci-czeko.cz/"
                    class="btn btn-primary mt-6 h-12 rounded-full border-0 px-7 text-base text-white shadow-lg shadow-jci-blue/25">
            Více informací
          </NuxtLink>
        </div>
        <img src="/czeko-2.jpg" alt="Setkání (budoucích) leaderů" width="600" height="400"
             class="aspect-[3/2] w-full rounded-3xl object-cover shadow-xl shadow-jci-navy/10" />
      </article>

    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Projekty JCI Czech Republic - Business kotel, Vánoční krabice',
  description: 'Projekty členů JCI mají dopad! Business kotel, Vánoční krabice pro děti ze sociálně slabších rodin, Setkání budoucích leaderů a další.',
  ogTitle: 'Projekty JCI Czech Republic',
  ogDescription: 'Business kotel, Vánoční krabice, Setkání budoucích leaderů - projekty s pozitivním dopadem na společnost.',
  ogImage: '/pbk.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Projekty JCI Czech Republic',
  twitterDescription: 'Projekty členů JCI mají dopad na komunitu a společnost.',
  twitterImage: '/pbk.jpg',
})
</script>
