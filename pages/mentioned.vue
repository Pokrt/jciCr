<template>
  <PageHero
      title="Napsali o nás"
      lead="Přečtěte si články o JCI Czech Republic, našich členech a projektech v médiích." />

  <section class="w-full bg-base-100 py-16 md:py-24">
    <div class="mx-auto max-w-6xl px-4 md:px-6">
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="article in articles" :key="article.link"
                 class="group flex flex-col overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-jci-navy/10">
          <div class="relative aspect-[16/10] overflow-hidden">
            <img :src="article.image" :alt="article.name" width="340" height="213" loading="lazy"
                 class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div class="flex flex-1 flex-col p-6">
            <h3 class="text-balance font-bold leading-snug tracking-[-0.01em] text-jci-black">{{ article.name }}</h3>
            <p class="mt-3 flex-1 text-sm leading-relaxed text-base-content/70">{{ article.summary }}</p>
            <NuxtLink :to="article.link" target="_blank" rel="noopener noreferrer"
                      class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-jci-blue transition-colors hover:text-jci-navy">
              Celý článek
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
                   stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'JCI Czech Republic v médiích - Články a zmínky',
  description: 'JCI Czech Republic v médiích - přečtěte si články o našich členech, projektech a akcích v českém tisku.',
  ogTitle: 'JCI Czech Republic v médiích',
  ogDescription: 'Články a zmínky o JCI Czech Republic, našich členech a projektech.',
  ogType: 'website',
  twitterCard: 'summary',
  twitterTitle: 'JCI Czech Republic v médiích',
  twitterDescription: 'Články a zmínky o JCI Czech Republic v českém tisku.',
})

const articles = [
  {
    name: "Již 1. října v Českých Budějovicích proběhne byznysová konference BYZON",
    link: "https://budejcka.drbna.cz/zpravy/spolecnost/43167-jiz-1-rijna-v-ceskych-budejovicich-probehne-byznysova-konference-byzon.html",
    summary: "Díky spolupráci s JCI a Moderním Leaderem vznikla druhá scéna zaměřená na interaktivní workshopy s praktickými tipy. Konference nově nabídne i koučovací zónu, kde mohou návštěvníci konzultovat se zkušenými kouči a posunout své podnikání dál.",
    image: "/articles/foto7.jpg"
  },
  {
    name: "Pražský hrad hostil nadějnou mladou generaci z evropských zemí, za organizací velkolepé akce stojí lídři z pražského spolku JCI",
    link: "https://www.czechstartups.org/novinky/prazsky-hrad-hostil-nadejnou-mladou-generaci-z-evropskych-zemi-za-organizaci-velkolepe-akce-stoji-lidri-z-prazskeho-spolku-jci/",
    summary: "Pražský hrad hostil akci pro nadějnou mladou generaci z různých evropských zemí, organizovanou lídry z pražského spolku JCI.",
    image: "/articles/foto1.png"
  },
  {
    name: "Mladý Čech se soběstačnými domy zaujal. Má mezinárodní cenu, kterou dřív obdržel i Wozniak",
    link: "https://www.e15.cz/tema/jak-si-uzit-design/mlady-cech-se-sobestacnymi-domy-zaujal-ma-mezinarodni-cenu-kterou-driv-obdrzel-i-wozniak-1362596",
    summary: "Mladý český inovátor získal mezinárodní cenu za své soběstačné domy, ocenění, které dříve obdržel i Steve Wozniak.",
    image: "/articles/foto2.webp"
  },
  {
    name: "Kongres CZEKO 2016 budou v říjnu hostit Budějovice",
    link: "https://www.casopisbarbar.cz/prezentace/kongres-czeko-2016-budou-v-rijnu-hostit-budejovice",
    summary: "České Budějovice budou v říjnu hostit Kongres CZEKO 2016, významnou událost pro podnikatele a lídry.",
    image: "/articles/foto3.jpg"
  },
  {
    name: "Junioři zakončili loňský rok charitativním projektem pro děti",
    link: "https://budejcka.drbna.cz/z-kraje/ceskobudejovicko/18168-juniori-zakoncili-lonsky-rok-charitativnim-projektem-pro-deti.html",
    summary: "Mladí lidé zakončili minulý rok charitativním projektem zaměřeným na pomoc dětem, který měl pozitivní ohlas.",
    image: "/articles/foto4.jpg"
  },
  {
    name: "Založení další pobočky neziskové organizace JCI podpořil její turecký prezident",
    link: "https://hradecky.denik.cz/podnikani/zalozeni-dalsi-pobocky-neziskove-organizace-jci-podporil-jeji-turecky-prezident-20151108.html",
    summary: "Turecký prezident JCI podpořil založení nové pobočky této neziskové organizace, která se zaměřuje na rozvoj mladých lídrů.",
    image: "/articles/foto5.jpg"
  },
  {
    name: "Business kotel představil",
    link: "https://www.karp-kv.cz/aktualita/business-kotel-predstavil/27",
    summary: "Business kotel, iniciativa pro podporu začínajících podnikatelů, představil nové projekty a možnosti pro mladé podnikatele.",
    image: "/articles/foto6.jpg"
  },
]
</script>
