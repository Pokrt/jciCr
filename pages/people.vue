<template>
  <PageHero
      title="Lidé, kteří stojí v čele JCI"
      lead="Seznamte se s odhodlanými lidmi, kteří vedou JCI Czech Republic." />

  <section class="w-full bg-base-100 py-16 md:py-24">
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <h2 class="text-balance font-extrabold tracking-[-0.02em] text-jci-black text-[clamp(1.5rem,3vw,2.2rem)]">Vedení</h2>
      <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="person in presidents" :key="person.name"
             class="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-jci-navy/10">
          <img :src="img(person.photo)" :alt="person.name" width="64" height="64" loading="lazy"
               class="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-jci-blue/15" />
          <div class="min-w-0">
            <h3 class="truncate font-bold text-jci-black">{{ person.name }}</h3>
            <p class="text-sm text-base-content/70">{{ person.position }}</p>
            <a :href="person.linkedin" target="_blank" rel="noopener noreferrer"
               class="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-jci-blue transition-colors hover:text-jci-navy">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <h2 class="mt-16 text-balance font-extrabold tracking-[-0.02em] text-jci-black text-[clamp(1.5rem,3vw,2.2rem)]">Senátoři</h2>
      <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="person in senators" :key="person.name"
             class="flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-jci-navy/10">
          <img :src="img(person.photo)" :alt="person.name" width="64" height="64" loading="lazy"
               class="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-jci-teal/25" />
          <div class="min-w-0">
            <h3 class="truncate font-bold text-jci-black">{{ person.name }}</h3>
            <p class="text-sm text-base-content/60">Senátor JCI</p>
            <a :href="person.linkedin" target="_blank" rel="noopener noreferrer"
               class="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-jci-blue transition-colors hover:text-jci-navy">
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Vedení JCI Czech Republic - Prezidenti a Senátoři',
  description: 'Seznamte se s vedením JCI Czech Republic. Národní prezident, lokální prezidenti a senátoři - lídři, kteří stojí v čele naší organizace.',
  ogTitle: 'Vedení JCI Czech Republic - Prezidenti a Senátoři',
  ogDescription: 'Seznamte se s odhodlanými lidmi, kteří stojí v čele JCI Czech Republic.',
  ogType: 'website',
  twitterCard: 'summary',
  twitterTitle: 'Vedení JCI Czech Republic',
  twitterDescription: 'Seznamte se s vedením JCI Czech Republic - národní prezident, lokální prezidenti a senátoři.',
})

const img = (p: string) => (p.startsWith('/') ? p : '/' + p)

const presidents = [
  { name: "Leonid Kushnir", linkedin: "https://www.linkedin.com/in/leonidkushnir/", photo: "leon.jpg", position: "Národní prezident" },
  { name: "Frantisek Hanf", linkedin: "https://www.linkedin.com/in/frantisekhanf/", photo: "frantisek_hanf.jpg", position: "Lokální prezident, Praha" },
  { name: "Štěpán Kapko", linkedin: "https://www.linkedin.com/in/stepankapko/", photo: "stepan.jpg", position: "Lokální prezident, Plzeň" },
  { name: "Luboš Petráň", linkedin: "https://www.linkedin.com/in/lubo%C5%A1-petr%C3%A1%C5%88-526b6327a/", photo: "lubos.jpg", position: "Lokální prezident, České Budějovice" }
]

const senators = [
  { name: "Václav Ševčík", linkedin: "https://www.linkedin.com/in/vaclavsevcik/", photo: "/vasek.jpg" },
  { name: "Jana Havlíčková", linkedin: "https://www.linkedin.com/in/janahavlickova/", photo: "/jana.jpeg" },
  { name: "Jiří Mauritz", linkedin: "https://www.linkedin.com/in/jirimauritz/", photo: "/jiri.jpg" },
  { name: "Miroslav Rys", linkedin: "https://www.linkedin.com/in/rysmiroslav/", photo: "/mirek.jpg" },
  { name: "Vojtěch Kačírek", linkedin: "https://www.linkedin.com/in/vojtech-kacirek-2b07983/", photo: "/vojtech.jpg" },
  { name: "Leoš Kubíček", linkedin: "https://www.linkedin.com/in/leos-kubicek-80167430/", photo: "/leos.jpg" },
  { name: "Blanka Bendlová", linkedin: "https://www.linkedin.com/in/blankabendlova/", photo: "/blanka.jpg" },
  { name: "Jan Plojhar", linkedin: "https://www.linkedin.com/in/janplojhar/", photo: "/playhard.jpg" },
  { name: "Jana Daniela Šabatková", linkedin: "https://www.linkedin.com/in/janadaniela/", photo: "/jd.jpeg" }
]
</script>
