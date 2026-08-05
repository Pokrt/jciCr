<template>
  <main>
    <PageHero
        title="Akce, na kterých dostanete leadership pod kůži"
        lead="Na lokální i globální úrovni. Meetupy, konference a vzdělávací akce pro mladé leadery.">
      <template #actions>
        <NuxtLink class="btn btn-primary h-12 rounded-full border-0 px-7 text-base text-white shadow-lg shadow-jci-blue/25" to="#events">
          Zobrazit akce
        </NuxtLink>
      </template>
    </PageHero>

    <section class="w-full bg-base-100 py-16 md:py-24">
      <div id="events" class="mx-auto max-w-6xl px-4 md:px-6">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="event in events" :key="event.name"
                   class="group flex flex-col overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-jci-navy/10">
            <div class="relative aspect-[16/10] overflow-hidden">
              <img v-if="event.image" :src="event.image" :alt="event.name" width="340" height="213" loading="lazy"
                   class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
              <div v-else class="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary to-jci-blue">
                <img src="/JCI - Czech Republic - WHITE.svg" alt="" class="h-12 w-12 opacity-90" />
              </div>
            </div>
            <div class="flex flex-1 flex-col p-6">
              <h3 class="text-balance font-bold leading-snug tracking-[-0.01em] text-jci-black">{{ event.name }}</h3>
              <p class="mt-3 flex-1 text-sm leading-relaxed text-base-content/70">{{ event.summary }}</p>
              <NuxtLink v-if="event.link" :to="event.link" target="_blank"
                        class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-jci-blue transition-colors hover:text-jci-navy">
                Více informací
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Akce JCI Czech Republic - Leadership události a konference',
  description: 'Akce JCI Czech Republic - leadership meetupy, konference a vzdělávací akce na lokální i globální úrovni. Rozvíjejte své dovednosti s námi.',
  ogTitle: 'Akce JCI Czech Republic - Leadership události',
  ogDescription: 'Leadership akce, konference a meetupy na lokální i globální úrovni. Dostaňte leadership pod kůži.',
  ogType: 'website',
  twitterCard: 'summary',
  twitterTitle: 'Akce JCI Czech Republic',
  twitterDescription: 'Leadership události a konference JCI Czech Republic.',
})

// ponytail: hardcoded until the events admin exists; move to a CMS/DB when it does.
const events = [
  {
    name: "Leadership meet-ups",
    link: null,
    summary: "Pravidelná setkání členů JCI v krajských městech. Pro více informací, aktuální termíny a program kontaktujte lokálního prezidenta.",
    image: null,
  },
  {
    name: "Kick off (leden)",
    link: null,
    summary: "Pravidelný víkendový leadershipový trénink zaměřený na plánování roku, seberozvoj a týmovou motivaci. Pro členy JCI, zejména pro lokální a národní radu.",
    image: "/events/kick-off.jpg",
  },
  {
    name: "Strategická Valná hromada (duben)",
    link: null,
    summary: "Jednodenní workshop zaměřený na strategii v praxi, měkké dovednosti a leadershipové přístupy. Pro členy JCI na lokální, národní i mezinárodní úrovni.",
    image: "/events/valna-hromada.jpg",
  },
  {
    name: "Czech academy (květen)",
    link: null,
    summary: "Tradiční outdoorová leadership akce zaměřená na sebereflexi a osobní růst. Určeno pro členy JCI i zájemce o leadership.",
    image: "/events/czech-academy.jpg",
  },
  {
    name: "JCI Regatta - Charitativní závod na plachetnicích",
    link: "https://www.jci-regatta.com/",
    summary: "Jachtingový závod pro členy, bývalé členy a jejich přátele. Akce má charitativní charakter.",
    image: "/events/regatta.jpg",
  },
  {
    name: "Evropská akademie JCI ve Švédsku",
    link: "https://jciea.jcisweden.se/",
    summary: "Exkluzivní leadershipová vzdělávací akce pro mladé leadery ve Švédsku.",
    image: "/events/sweden.jpg",
  },
  {
    name: "JCI Academy v Japonsku",
    link: "https://2025jciacademy.jc766.com/",
    summary: "Tradiční leadershipová akce s kulturně-diplomatickým přesahem pro národní leadery z více než 120 zemí světa.",
    image: "/events/japan.jpg",
  },
]
</script>
