<template>
  <PageHero
      title="Naše pobočky"
      lead="Kde nás aktuálně najdete? Neváhejte se s námi spojit — rádi vás přivítáme." />

  <section class="w-full bg-base-100 py-16 md:py-24">
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="branch in branches" :key="branch.ICO"
             class="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-jci-navy/10">
          <h3 class="text-lg font-bold tracking-tight text-jci-black">{{ branch.name }}</h3>
          <dl class="mt-4 space-y-3 text-sm text-base-content/75">
            <div class="flex gap-2.5">
              <svg class="mt-0.5 h-4 w-4 shrink-0 text-jci-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>{{ branch.address }}</span>
            </div>
            <div class="flex gap-2.5">
              <svg class="mt-0.5 h-4 w-4 shrink-0 text-jci-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/></svg>
              <span>IČO: {{ branch.ICO }}</span>
            </div>
            <div class="flex gap-2.5">
              <svg class="mt-0.5 h-4 w-4 shrink-0 text-jci-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>
              <span>DIČ: {{ branch.DIC }}</span>
            </div>
            <div class="flex gap-2.5">
              <svg class="mt-0.5 h-4 w-4 shrink-0 text-jci-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>
              <a class="break-all font-medium text-jci-blue hover:text-jci-navy" :href="'mailto:' + branch.email">{{ branch.email }}</a>
            </div>
            <div class="flex gap-2.5">
              <svg class="mt-0.5 h-4 w-4 shrink-0 text-jci-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M4 10h16M12 3 4 7h16zM6 10v8M10 10v8M14 10v8M18 10v8"/></svg>
              <span class="tabular-nums">{{ branch.bank_account }}</span>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>

  <section class="relative isolate overflow-hidden bg-secondary py-16 text-white md:py-24">
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40" aria-hidden="true">
      <div class="absolute -right-[14%] top-1/2 aspect-square w-[min(58vw,520px)] -translate-y-1/2">
        <Ripple :palette="rippleNavy" :rings="6" spin="reverse" />
      </div>
    </div>
    <div class="relative z-[1] mx-auto max-w-3xl px-4 text-center md:px-6">
      <h2 class="text-balance font-extrabold tracking-[-0.03em] text-[clamp(1.8rem,3.6vw,2.8rem)]">Založte si vlastní pobočku</h2>
      <p class="mx-auto mt-5 max-w-[60ch] leading-relaxed text-white/85">
        Pokud chcete založit pobočku ve vašem městě, kontaktujte národního prezidenta JCI Czech Republic. Rádi vám
        pomůžeme se založením i rozjezdem vaší místní pobočky.
      </p>
      <a href="mailto:info@jcicr.cz"
         class="btn mt-8 h-12 rounded-full border-0 bg-jci-yellow px-7 text-base font-semibold text-jci-black hover:brightness-105">
        Kontaktujte národního prezidenta
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Pobočky JCI Czech Republic - Praha, Plzeň, České Budějovice',
  description: 'Pobočky JCI Czech Republic - kontakty na JCI Prague, JCI Pilsen, JCI South Bohemia. Založte si vlastní pobočku ve vašem městě.',
  ogTitle: 'Pobočky JCI Czech Republic',
  ogDescription: 'Kde nás najdete? JCI Prague, JCI Pilsen, JCI South Bohemia - kontakty a informace.',
  ogType: 'website',
  twitterCard: 'summary',
  twitterTitle: 'Pobočky JCI Czech Republic',
  twitterDescription: 'Pobočky JCI v České republice - Praha, Plzeň, České Budějovice.',
})

const rippleNavy = ['#57BCBC', '#5b8fd0', '#8fb8e6', '#3f74c0', '#a9dcdc', '#cfe0f4']

const branches = [
  {
    name: "JCI Czech Republic",
    address: "Václavské náměstí 795/40, Praha 1, 110 00",
    ICO: "22885498",
    DIC: "nejsme plátci DPH",
    email: "info@jcicr.cz",
    bank_account: "2700242309 / 2010"
  },
  {
    name: "JCI South Bohemia",
    address: "Husova tř. 1846/9, České Budějovice, 371 01",
    ICO: "22841601",
    DIC: "nejsme plátci DPH",
    email: "budejovice@jcicr.cz",
    bank_account: "2300599907 / 2010"
  },
  {
    name: "JCI Pilsen",
    address: "Šafaříkovy sady 2455/5, Plzeň, 301 00",
    ICO: "22710973",
    DIC: "nejsme plátci DPH",
    email: "pilsen@jcicr.cz",
    bank_account: "2700355952 / 2010"
  },
  {
    name: "JCI Prague",
    address: "Štěpánská 617/26, Praha 1, 110 00",
    ICO: "02506955",
    DIC: "nejsme plátci DPH",
    email: "prague@jcicr.cz",
    bank_account: "2100549518 / 2010"
  }
]
</script>
