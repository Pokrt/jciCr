<template>

  <section class="relative isolate overflow-hidden bg-[#f1f8fd]">
    <!-- Ripple motif -->
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-70 md:opacity-100" aria-hidden="true">
      <div class="absolute right-[-38%] top-[76%] w-[118vw] max-w-[500px] aspect-square -translate-y-1/2
                  md:right-[-15%] md:top-1/2 md:w-[86vh] md:max-w-[860px]">
        <Ripple :spin="true" />
      </div>
    </div>
    <!-- Legibility scrim — desktop: horizontal fade; mobile: top-down fade -->
    <div class="pointer-events-none absolute inset-0 z-[1] hidden md:block" aria-hidden="true"
         style="background:linear-gradient(95deg,rgba(241,248,253,.97) 0%,rgba(241,248,253,.72) 34%,rgba(241,248,253,0) 62%)"></div>
    <div class="pointer-events-none absolute inset-0 z-[1] md:hidden" aria-hidden="true"
         style="background:linear-gradient(180deg,#f1f8fd 0%,#f1f8fd 54%,rgba(241,248,253,.4) 80%,rgba(241,248,253,0) 100%)"></div>

    <div class="relative z-[2] mx-auto w-full max-w-[1200px] px-4 md:px-6 py-20 md:py-28 lg:py-36">
      <div class="max-w-[760px]">
        <h1 class="text-jci-black font-extrabold leading-[0.98] tracking-[-0.045em] text-balance
                   text-[clamp(2.4rem,5.6vw,4.6rem)]">
          Rozvíjíme lídry pro <span class="text-jci-blue">měnící se svět</span>.
        </h1>
        <p class="mt-6 max-w-[46ch] text-[#3d3a56] leading-relaxed text-[clamp(1.05rem,1.7vw,1.3rem)]">
          Jsme Junior Chamber International — globální hnutí mladých lídrů od roku 1915.
          Přes 150 000 členů ve více než 120 zemích světa.
        </p>
        <div class="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
          <NuxtLink
              to="/membership"
              class="btn btn-primary text-white h-12 gap-2 rounded-full border-0 px-7 text-base shadow-lg shadow-jci-blue/30">
            Přidej se k hnutí
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"
                 stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </NuxtLink>
          <NuxtLink
              to="/projects"
              class="btn btn-outline h-12 rounded-full border-jci-black/25 px-7 text-base text-jci-black
                     hover:border-jci-black hover:bg-jci-black hover:text-white">
            Objev projekty
          </NuxtLink>
        </div>
        <dl class="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-jci-black/15 pt-7">
          <div>
            <dt class="text-3xl font-extrabold tracking-tight text-jci-black tabular-nums">120+</dt>
            <dd class="mt-0.5 text-sm text-[#5a5775]">zemí světa</dd>
          </div>
          <div>
            <dt class="text-3xl font-extrabold tracking-tight tabular-nums" style="color:#2c8a8a">150 000+</dt>
            <dd class="mt-0.5 text-sm text-[#5a5775]">aktivních členů</dd>
          </div>
          <div>
            <dt class="text-3xl font-extrabold tracking-tight text-jci-blue tabular-nums">1915</dt>
            <dd class="mt-0.5 text-sm text-[#5a5775]">rok založení</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
  <section class="w-full bg-base-100 py-16 md:py-24 lg:py-28">
    <div class="mx-auto grid max-w-6xl items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
      <img
          src="/pika.jpg"
          width="600"
          height="400"
          alt="Community Involvement"
          class="order-last aspect-[3/2] w-full rounded-3xl object-cover object-center shadow-xl shadow-jci-navy/10 lg:order-first"
      />
      <div>
        <h2 class="text-balance font-extrabold tracking-[-0.03em] text-jci-black text-[clamp(1.9rem,3.6vw,3rem)]">
          Cíl
        </h2>
        <p class="mt-5 max-w-[54ch] text-lg leading-relaxed text-base-content/75">
          Naším cílem je být hybatelem změn ve společnosti, a proto začínáme
          sami u sebe. Aktivně rozvíjíme své dovednosti vést sebe i druhé, pracovat v týmu, vyhledávat nové výzvy a
          nacházet řešení aktuálních problémů v našich komunitách. Dosahujeme pozitivních změn ve
          společnosti propojením veřejného, neziskového a podnikatelského prostředí.
          Jedním z našich principů fungování je <span class="font-semibold text-jci-black">„Think globally, act locally"</span>.
        </p>
        <NuxtLink
            to="/projects"
            class="btn btn-primary mt-8 h-12 gap-2 rounded-full border-0 px-7 text-base text-white shadow-lg shadow-jci-blue/25">
          Objev projekty
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"
               stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="relative isolate overflow-hidden bg-secondary py-16 text-white md:py-24 lg:py-28">
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40" aria-hidden="true">
      <div class="absolute -left-[16%] top-1/2 aspect-square w-[min(64vw,560px)] -translate-y-1/2">
        <Ripple :palette="rippleNavy" :rings="6" spin />
      </div>
    </div>
    <div class="relative z-[1] mx-auto max-w-3xl px-4 text-center md:px-6">
      <h2 class="text-balance font-extrabold tracking-[-0.03em] text-[clamp(1.9rem,3.8vw,3rem)]">
        Seznamte se s našimi členy
      </h2>
      <p class="mx-auto mt-5 max-w-[65ch] text-lg leading-relaxed text-white/85">
        Junior Chamber International je různorodá komunita profesionálů, podnikatelů, studentů a komunitních lídrů,
        zapálených pro vytváření pozitivních změn. Společně tvoříme silnou skupinu mladých lidí, kteří se zajímají o
        aktivity ve svých lokálních komunitách,
        sdílejí své zkušenosti i znalosti a pomáhají tvořit lepší svět.
      </p>
      <NuxtLink
          to="/membership"
          class="btn mt-8 h-12 rounded-full border-0 bg-jci-yellow px-7 text-base font-semibold text-jci-black hover:brightness-105">
        Více o členství
      </NuxtLink>
    </div>
    <div class="relative z-[1] mx-auto mt-14 max-w-6xl px-4 md:px-6">
      <galery/>
    </div>
  </section>


  <section class="w-full bg-base-200 py-16 md:py-24 lg:py-28">
    <div class="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 md:px-6">
      <div class="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm md:p-10">
        <span class="inline-flex rounded-full bg-secondary/10 px-3 py-1 text-sm font-semibold text-secondary">Mise</span>
        <h2 class="mt-5 text-balance text-2xl font-bold tracking-[-0.02em] text-jci-black md:text-3xl">
          Poskytujeme příležitosti mladým lidem, kteří chtějí měnit svět k lepšímu.
        </h2>
        <p class="mt-4 leading-relaxed text-base-content/75">
          Naším cílem je podporovat a rozvíjet mladé lidi, kteří mají vizi a touhu zlepšit svět kolem sebe. Nabízíme
          jim vzdělávací programy, mentoring a příležitosti k realizaci jejich nápadů a projektů.
        </p>
      </div>
      <div class="rounded-3xl border border-base-300 bg-base-100 p-8 shadow-sm md:p-10">
        <span class="inline-flex rounded-full bg-jci-blue/10 px-3 py-1 text-sm font-semibold text-jci-blue">Vize</span>
        <h2 class="mt-5 text-balance text-2xl font-bold tracking-[-0.02em] text-jci-black md:text-3xl">
          Být přední organizací mladých lídrů.
        </h2>
        <p class="mt-4 leading-relaxed text-base-content/75">
          Chceme se stát vedoucí organizací, která inspiruje a podporuje mladé lidi v jejich snaze o pozitivní
          změnu. Budujeme silnou komunitu, jejíž členové se navzájem motivují a pomáhají realizovat smysluplné projekty.
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const rippleNavy = ['#57BCBC', '#5b8fd0', '#8fb8e6', '#3f74c0', '#a9dcdc', '#cfe0f4']

useSeoMeta({
  title: 'JCI Czech Republic - Developing Leaders for a Changing World',
  description: 'Junior Chamber International Czech Republic - globální leadershipová organizace s více než 150 000 členy ve 120 zemích. Rozvíjíme mladé lídry a vytváříme pozitivní změny ve společnosti.',
  ogTitle: 'JCI Czech Republic - Developing Leaders for a Changing World',
  ogDescription: 'Globální leadershipová organizace rozvíjející mladé lídry. Připojte se k 150 000+ členům ve více než 120 zemích světa.',
  ogImage: '/pavel.jpg',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'JCI Czech Republic - Developing Leaders for a Changing World',
  twitterDescription: 'Globální leadershipová organizace rozvíjející mladé lídry ve více než 120 zemích světa.',
  twitterImage: '/pavel.jpg',
})
</script>