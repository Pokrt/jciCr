<template>
  <main class="">
    <section class="flex flex-col items-center justify-center h-screen bg-primary text-base-100  ">
      <div class="max-w-md w-full space-y-4 px-4">
        <h1 class="text-3xl font-bold ">
          Akce - Akce, na kterých dostanete leadership pod kůži. Na lokální i globální úrovni.
        </h1>
        <NuxtLink
            class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral"
            to="#events"
        >
          Zobrazit akce
        </NuxtLink>
      </div>
    </section>
    <section class="w-full bg-neutral flex justify-center">
      <div id="events" class="w-full container  px-4 py-12 md:px-6 lg:py-16 bg-neutral ">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3  ">

          <article v-for="article in articles.data" class="rounded-lg  border-base-100 border text-base-100">
            <div v-if="article.attributes.Image" class="relative h-60 overflow-hidden rounded-t-lg">
              <img
                  :src="config.public.strapiApi +  article.attributes.Image.data.attributes.formats.medium.url + '?format=webp'"
                  width="340"
                  height="300"
                  class="h-full w-full object-cover object-center"
                  style="aspect-ratio: 340 / 300; object-fit: cover;"
              />
            </div>
            <div class="p-4">
              <h3 class="text-xl font-bold">{{ article.attributes.Name }}</h3>
              <p class="mt-2  ">
                {{ article.attributes.Summary }}
              </p>
              <NuxtLink
                  v-if="article.attributes.Link"
                  class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral mt-4"
                  :to="article.attributes.Link"
              >
                Více informací
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
      </div>
    </section>

  </main>
</template>
<script setup >
const config = useRuntimeConfig()
const { data: articles } = await useFetch(config.public.strapiApi +  '/strapi/events?pagination%5BwithCount%5D=false&populate=%2A')

</script>


<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      "articles": [-->
<!--        {-->
<!--          "name": "Leadership meet-ups",-->
<!--          "link": null,-->
<!--          "summary": "Pravidelné setkání členů JCI v krajských městech. Pro více informací, aktuální termíny a program kontaktujte Lokálního prezidenta.",-->
<!--          "image": null-->
<!--        },-->
<!--        {-->
<!--          "name": "Kick off (leden)",-->
<!--          "link": null,-->
<!--          "summary": "Pravidelný víkendový leadership trénink zaměřený na plánování roku, seberozvoj a týmovou motivaci. Pro členy JCI, zejména pro Lokální a Národní radu.",-->
<!--          "image": null-->
<!--        },-->
<!--        {-->
<!--          "name": "Strategická Valná hromada (duben)",-->
<!--          "link": null,-->
<!--          "summary": "Jednodenní workshop zaměřený na strategii v praxi, měkké dovednosti a leadershipové přístupy. Pro členy JCI na lokální, národní i mezinárodní úrovni.",-->
<!--          "image": null-->
<!--        },-->
<!--        {-->
<!--          "name": "Czech academy (květen)",-->
<!--          "link": null,-->
<!--          "summary": "Tradiční outdoorová leadership akce zaměřená na sebereflexi a osobní růst. Určeno pro členy JCI i zájemce o leadership.",-->
<!--          "image": null-->
<!--        },-->
<!--        {-->
<!--          "name": "JCI Regatta - Charitativní závod na plachetnicích",-->
<!--          "link": "https://www.jci-regatta.com/",-->
<!--          "summary": "Jachtingový závod pro členy, bývalé členy a jejich přátele. Akce je charitativního charakteru.",-->
<!--          "image": "https://www.jci-regatta.com/wp-content/uploads/2019/02/IMG_7715.jpg"-->
<!--        },-->
<!--        {-->
<!--          "name": "Evropská akademie JCI ve Švédsku",-->
<!--          "link": "https://jciea.jcisweden.se/",-->
<!--          "summary": "Exkluzivní leadershipová vzdělávací akce pro mladé leadery ve Švédsku.",-->
<!--          "image": null-->
<!--        },-->
<!--        {-->
<!--          "name": "Evropská konference mladých leaderů 2024, Oulu ve Finsku",-->
<!--          "link": "https://jciec2024oulu.com/",-->
<!--          "summary": "Konference s tématem 'Well-being, technologie, příroda a kultura', kde se setká 2 000 mladých leaderů z celé Evropy.",-->
<!--          "image": null-->
<!--        },-->
<!--        {-->
<!--          "name": "Světový kongres mladých leaderů 2024, Tayoun na Taiwanu",-->
<!--          "link": "https://www.jciwc24.com/",-->
<!--          "summary": "Mladí leadeři z celého světa se setkají na Taiwanu.",-->
<!--          "image": null-->
<!--        },-->
<!--        {-->
<!--          "name": "JCI Academy v Japonsku",-->
<!--          "link": null,-->
<!--          "summary": "Tradiční leadershipová akce s kulturně-diplomatickým přesahem pro národní leadery z více než 120 zemí světa.",-->
<!--          "image": null-->
<!--        }-->
<!--      ]-->
<!--    }-->


<!--  },-->
<!--}-->
<!--</script>-->