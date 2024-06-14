<template>
  <main class="container mx-auto px-4 py-12 md:px-6 lg:py-16">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-base-100 ">
      <article v-for="article in articles" class="rounded-lg bg-primary shadow-md ">
        <div class="relative h-60 overflow-hidden rounded-t-lg">
          <img
              :src="article.image"
              width="340"
              height="300"
              class="h-full w-full object-cover object-center"
              style="aspect-ratio: 340 / 300; object-fit: cover;"
          />
        </div>
        <div class="p-4">
          <h3 class="text-xl font-bold">{{ article.name }}</h3>
          <p class="mt-2  ">
            {{ article.summary }}
          </p>
          <NuxtLink
              class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral mt-4"
              :to="article.link"
          >
            Celý článek
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
                class="ml-1 h-4 w-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </NuxtLink>
        </div>
      </article>

    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          name: "Pražský hrad hostil nadějnou mladou generaci z evropských zemí, za organizací velkolepé akce stojí lídři z pražského spolku JCI",
          link: "https://www.czechstartups.org/novinky/prazsky-hrad-hostil-nadejnou-mladou-generaci-z-evropskych-zemi-za-organizaci-velkolepe-akce-stoji-lidri-z-prazskeho-spolku-jci/",
          summary: "Pražský hrad hostil akci pro nadějnou mladou generaci z různých evropských zemí, organizovanou lídry z pražského spolku JCI.",
          image: "/articles/foto1.png"  // Placeholder image link
        },
        {
          name: "Mladý Čech se soběstačnými domy zaujal. Má mezinárodní cenu, kterou dřív obdržel i Wozniak",
          link: "https://www.e15.cz/tema/jak-si-uzit-design/mlady-cech-se-sobestacnymi-domy-zaujal-ma-mezinarodni-cenu-kterou-driv-obdrzel-i-wozniak-1362596",
          summary: "Mladý český inovátor získal mezinárodní cenu za své soběstačné domy, ocenění, které dříve obdržel i Steve Wozniak.",
          image: "/articles/foto2.webp"  // Placeholder image link
        },
        {
          name: "Kongres CZEKO 2016 budou v říjnu hostit Budějovice",
          link: "https://www.casopisbarbar.cz/prezentace/kongres-czeko-2016-budou-v-rijnu-hostit-budejovice",
          summary: "České Budějovice budou v říjnu hostit Kongres CZEKO 2016, významnou událost pro podnikatele a lídry.",
          image: "/articles/foto3.jpg"  // Placeholder image link
        },
        {
          name: "Junioři zakončili loňský rok charitativním projektem pro děti",
          link: "https://budejcka.drbna.cz/z-kraje/ceskobudejovicko/18168-juniori-zakoncili-lonsky-rok-charitativnim-projektem-pro-deti.html",
          summary: "Mladí lidé zakončili minulý rok charitativním projektem zaměřeným na pomoc dětem, který měl pozitivní ohlas.",
          image: "/articles/foto4.jpg"  // Placeholder image link
        },
        {
          name: "Založení další pobočky neziskové organizace JCI podpořil její turecký prezident",
          link: "https://hradecky.denik.cz/podnikani/zalozeni-dalsi-pobocky-neziskove-organizace-jci-podporil-jeji-turecky-prezident-20151108.html",
          summary: "Turecký prezident JCI podpořil založení nové pobočky této neziskové organizace, která se zaměřuje na rozvoj mladých lídrů.",
          image: "/articles/foto5.jpg"  // Placeholder image link
        },
        {
          name: "Business kotel představil",
          link: "https://www.karp-kv.cz/aktualita/business-kotel-predstavil/27",
          summary: "Business kotel, iniciativa pro podporu začínajících podnikatelů, představil nové projekty a možnosti pro mladé podnikatele.",
          image: "/articles/foto6.jpg"  // Placeholder image link
        }
      ],
    }
  },
}
</script>