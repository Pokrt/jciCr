<template>

  <section class="w-full py-12 md:py-24 lg:py-32   grid place-items-center bg-primary text-white">
    <div
        class="container grid items-center justify-center gap-4 px-4 text-center md:px-6 text-base-100 border-base-100 ">
      <div class="space-y-3">
        <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Staň se členem prestižní globální organizace
        </h2>
        <p class="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
          Rozvíjej své leadershipové schopnosti a dovednosti jako člen celosvětové komunity s více než stoletou tradicí.
        </p>
      </div>
      <div class="mx-auto w-full max-w-sm mt-10 border-2 rounded-lg p-2 border-base-100">
        <div class=" ">
          <p class="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white mt-4 mb-2">Jako člen
            získáš:</p>
          <ul class="list-disc space-y-1 pl-4 text-left">
            <li>Přístup do komunity 150+ tisíc členů ve 120 zemích světa.</li>
            <li>Možnost účasti na exkluzivních mezinárodních akademiích a konferencích</li>
            <li>Příležitost k osobnímu rozvoji a networkingu na globální úrovni</li>
          </ul>
        </div>
        <div class="">
          <p class="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-white mt-4 mb-2">Členství
            přináší řadu výhod, jako je:</p>
          <ul class="list-disc space-y-1 pl-4 text-left">
            <li>Přístup k bezplatným leadershipovým meetupům a masterclassům</li>
            <li>Zvýhodněné ceny na akce pořádané JCI Czech Republic</li>
            <li>Další exkluzivní benefity</li>
          </ul>
        </div>
        <NuxtLink to="https://share.hsforms.com/11QuDcj41RhaVOkf3Z5Qs-Q5irbi"
                  class="btn text-base-100 bg-white h-10 w-full hover:btn-neutral mt-4">
          Staň se členem
        </NuxtLink>
      </div>
    </div>
  </section>


  <section class="w-full py-12 md:py-24 lg:py-32 grid place-items-center text-white">
    <div class="container px-4 md:px-6">
      <div class="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
        <div class="space-y-4">
          <div class="inline-block rounded-lg bg-primary px-3 py-1 text-sm font-medium text-base-100 ">
            Global Leadership Masterclasses
          </div>
          <h2 class="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Zlepšete své leadershipové dovednosti
          </h2>
          <p class="mx-auto max-w-[700px]  md:text-xl/relaxed ">
            JCI Global Leadership Masterclasses vám přinášejí profesionální
            školitele a špičkové světové instruktory, kteří se do hloubky věnují
            konceptům leadershipu a jejich převedení do praxe. Každý kurz je
            založen na jedné ze čtyř oblastí rozvoje JCI: Business & Entrepreneurship, Individual Development, Community
            Engagement,
            and International Cooperation.
          </p>
          <div class="flex space-x-4">
            <NuxtLink
                class="btn text-base-100 bg-white h-10 hover:btn-neutral mt-4"
                to="https://masterclass.jci.cc/#/"
            >
              Prozkoumat kurzy
            </NuxtLink>

          </div>
        </div>
        <div class="flex flex-col items-start space-y-4">
          <div class="inline-block rounded-lg bg-neutral px-3 py-1 text-sm font-medium text-base-100">JCI příležitosti k
            rozvoji
          </div>
          <p class="mx-auto max-w-[700px]  md:text-xl/relaxed ">
            Účastníci získají klíčové informace a odnesou si soubor soft skills i mezinárodní perspektivu, které jim
            pomohou
            úspěšně dosáhnout nejen obchodních cílů, ale také osobního
            a profesního rozvoje. Pro členy JCI jsou klíčové tréninky
            zdarma.
          </p>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="rounded-lg   p-4 shadow-sm bg-primary text-base-100">
              <h3 class="text-lg font-bold">Business &amp; Entrepreneurship</h3>
              <p class="text-sm ">
                Rozvíjejte své podnikatelské myšlení a dovednosti potřebné k úspěchu v podnikání na lokální i globální
                úrovni.
              </p>
            </div>
            <div class="rounded-lg   p-4 shadow-sm bg-primary text-base-100 ">
              <h3 class="text-lg font-bold">Individual Development</h3>
              <p class="text-sm  ">Urychlete svůj osobní a profesní růst</p>
            </div>
            <div class="rounded-lg   p-4 shadow-sm bg-primary text-base-100 ">
              <h3 class="text-lg font-bold">Community Engagement</h3>
              <p class="text-sm  ">
                Staňte se aktivnějším a lepším leaderem komunity.
              </p>
            </div>
            <div class="rounded-lg   p-4 shadow-sm bg-primary text-base-100 ">
              <h3 class="text-lg font-bold">International Cooperation</h3>
              <p class="text-sm  ">
                Staňte se leaderem s globálním chápáním světa a interkultruních rozdílů.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>