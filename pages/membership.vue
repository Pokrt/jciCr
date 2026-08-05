<template>
  <PageHero
      title="Staň se členem prestižní globální organizace"
      lead="Rozvíjej své leadershipové schopnosti a dovednosti jako člen celosvětové komunity s více než stoletou tradicí.">
    <template #actions>
      <NuxtLink to="https://share.hsforms.com/11QuDcj41RhaVOkf3Z5Qs-Q5irbi"
                class="btn btn-primary h-12 rounded-full border-0 px-7 text-base text-white shadow-lg shadow-jci-blue/25">
        Staň se členem
      </NuxtLink>
    </template>
  </PageHero>

  <section class="w-full bg-base-100 py-16 md:py-24">
    <div class="mx-auto max-w-5xl px-4 md:px-6">
      <div class="grid gap-6 md:grid-cols-2">
        <div class="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm">
          <span class="inline-flex rounded-full bg-jci-blue/10 px-3 py-1 text-sm font-semibold text-jci-blue">Jako člen získáš</span>
          <ul class="mt-5 space-y-3">
            <li v-for="item in gains" :key="item" class="flex gap-3 text-base-content/80">
              <svg class="mt-0.5 h-5 w-5 shrink-0 text-jci-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
        <div class="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm">
          <span class="inline-flex rounded-full bg-jci-teal/15 px-3 py-1 text-sm font-semibold text-[#2c8a8a]">Členství přináší výhody</span>
          <ul class="mt-5 space-y-3">
            <li v-for="item in perks" :key="item" class="flex gap-3 text-base-content/80">
              <svg class="mt-0.5 h-5 w-5 shrink-0 text-jci-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-10 flex justify-center">
        <NuxtLink to="https://share.hsforms.com/11QuDcj41RhaVOkf3Z5Qs-Q5irbi"
                  class="btn btn-primary h-12 rounded-full border-0 px-8 text-base text-white shadow-lg shadow-jci-blue/25">
          Staň se členem
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="w-full bg-base-200 py-16 md:py-24 lg:py-28">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
      <div>
        <span class="inline-flex rounded-full bg-jci-blue/10 px-3 py-1 text-sm font-semibold text-jci-blue">Global Leadership Masterclasses</span>
        <h2 class="mt-4 text-balance font-extrabold tracking-[-0.03em] text-jci-black text-[clamp(1.8rem,3.4vw,2.8rem)]">
          Zlepši své leadershipové dovednosti
        </h2>
        <p class="mt-5 max-w-[54ch] leading-relaxed text-base-content/75">
          JCI Global Leadership Masterclasses ti přinášejí profesionální školitele a špičkové světové instruktory,
          kteří se do hloubky věnují konceptům leadershipu a jejich převedení do praxe. Každý kurz je založen na jedné
          ze čtyř oblastí rozvoje JCI: Business &amp; Entrepreneurship, Individual Development, Community Engagement,
          and International Cooperation.
        </p>
        <NuxtLink to="https://masterclass.jci.cc/#/"
                  class="btn btn-primary mt-8 h-12 rounded-full border-0 px-7 text-base text-white shadow-lg shadow-jci-blue/25">
          Prozkoumat kurzy
        </NuxtLink>
      </div>
      <div>
        <p class="max-w-[54ch] leading-relaxed text-base-content/75">
          Účastníci získají klíčové informace, osvojí si soft skills i mezinárodní perspektivu, které jim
          pomohou nejen k dosažení obchodních cílů, ale také k osobnímu a profesnímu růstu. Pro členy JCI jsou
          klíčové tréninky zdarma.
        </p>
        <div class="mt-6 grid gap-4 sm:grid-cols-2">
          <div v-for="area in areas" :key="area.title"
               class="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
            <h3 class="font-bold text-jci-black">{{ area.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-base-content/70">{{ area.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Členství v JCI Czech Republic - Staň se členem',
  description: 'Staň se členem JCI Czech Republic a získej přístup do komunity 150 000+ členů ve 120 zemích. Leadership masterclasses, networking a osobní rozvoj.',
  ogTitle: 'Členství v JCI Czech Republic - Staň se členem',
  ogDescription: 'Rozvíjej své leadershipové schopnosti jako člen celosvětové komunity s více než stoletou tradicí.',
  ogType: 'website',
  twitterCard: 'summary',
  twitterTitle: 'Členství v JCI Czech Republic',
  twitterDescription: 'Staň se členem prestižní globální leadershipové organizace.',
})

const gains = [
  'Přístup do komunity 150+ tisíc členů ve 120 zemích světa.',
  'Možnost účasti na exkluzivních mezinárodních akademiích a konferencích',
  'Příležitost k osobnímu rozvoji a networkingu na globální úrovni',
]

const perks = [
  'Přístup k bezplatným leadershipovým meetupům a masterclassům',
  'Zvýhodněné vstupné na akce pořádané JCI Czech Republic',
  'Další exkluzivní benefity',
]

const areas = [
  { title: 'Business & Entrepreneurship', text: 'Rozvíjej své podnikatelské myšlení a dovednosti potřebné k úspěchu v podnikání na lokální i globální úrovni.' },
  { title: 'Individual Development', text: 'Urychli svůj osobní a profesní růst.' },
  { title: 'Community Engagement', text: 'Staň se aktivnějším a lepším leaderem komunity.' },
  { title: 'International Cooperation', text: 'Staň se leaderem s globálním přehledem a porozuměním interkulturním rozdílům.' },
]
</script>
