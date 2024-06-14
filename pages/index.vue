<template>

  <section class="w-full py-12 md:py-24 lg:py-32 grid place-items-center bg-primary ">
    <div class="container px-4 md:px-6">
      <div class="grid  items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        <div class="flex flex-col justify-center space-y-4">
          <div class="space-y-2">
            <h2 class=" text-3xl font-bold text-base-100 tracking-tighter sm:text-5xl">
              Developing Leaders for a changing world
            </h2>
            <p class="font-helveticaneue max-w-[600px] text-base-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Junior Chamber International je globální leadershipová organizace, jejíž tradice sahá až do roku 1917.
              Dnes máme přes 150 000 aktivních členů ve více než 120 zemích světa!
            </p>
          </div>
        </div>
        <img
            src="/pavel.jpg"
            width="550"
            height="310"
            alt="Junior Chamber International"
            class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
      </div>
    </div>
  </section>
  <section class="w-full py-12 md:py-24 lg:py-32 bg-base-100 grid place-items-center">
    <div class="container px-4 md:px-6">
      <div class="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
        <img
            src="/pika.jpg"
            width="550"
            height="310"
            alt="Community Involvement"
            class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
        />
        <div class="flex flex-col justify-center space-y-4">
          <div class="space-y-2">
            <h2 class="text-3xl text-primary font-bold  sm:text-5xl">
              Cíl
            </h2>
            <p class="max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              Našim cílem je být hybatelem změn ve společnosti a proto začínáme sami u sebe. Aktivně rozvíjíme své
              dovednosti vést sebe, druhé a pracovat v týmu, vyhledávat nové výzvy a nacházet řešení k aktuálním
              problémům v našich komunitách.
              Našim cílem je dosáhnout pozitivních změn ve společnosti propojením veřejného, neziskového a
              podnikatelského prostředí.</p>
          </div>
          <div class="flex flex-col gap-2 min-[400px]:flex-row">
            <NuxtLink
                class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral"
                to="/projects"
            >
              Objev projekty
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="w-full py-12 md:py-24 lg:py-32 grid place-items-center bg-neutral">
    <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div class="space-y-3">
        <h2 class="text-3xl text-base-100 font-bold tracking-tighter sm:text-4xl md:text-5xl">Seznamte se s našimi
          členy</h2>
        <p class="mx-auto max-w-[700px] text-base-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
          Junior Chamber International je různorodá komunita profesionálů, podnikatelů, studentů a komunitních lídrů,
          kteří jsou zapálení pro pozitivní dopad. Společně tvoříme silnou skupinu mladých lidí, kteří se zajímají o
          aktivity ve svých lokálních komunitách,
          sdílejí své zkušenosti i znalosti a pomáhají tvořit lepší svět.
        </p>
      </div>
      <div class=" ">
        <NuxtLink
            class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral"
            to="/membership">
          Více o členství
        </NuxtLink>
      </div>
      <galery/>
    </div>
  </section>


  <section class="w-full py-12 md:py-24 lg:py-32 grid place-items-center bg-base-100">

    <div class=" py-12 md:py-24">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid gap-10 md:grid-cols-2 items-center">
          <div class="space-y-6">
            <div
                class=" inline-block rounded-lg bg-neutral px-3 py-1 text-sm font-medium text-base-100">
              Mise
            </div>
            <h2 class="text-3xl font-bold tracking-tighter md:text-4xl">
              Poskytujeme příležitosti mladým lidem, kteří chtějí měnit svět k lepšímu.
            </h2>
            <p class="  max-w-[600px]">
              Naším cílem je podporovat a rozvíjet mladé lidi, kteří mají vizi a touhu zlepšit svět kolem sebe. Nabízíme
              jim vzdělávací programy, mentoring a příležitosti k realizaci jejich nápadů a projektů.
            </p>
          </div>
          <div class="space-y-6">
            <div
                class=" inline-block rounded-lg bg-primary px-3 py-1 text-sm font-medium text-base-100  ">
              Vize
            </div>
            <h2 class="text-3xl font-bold tracking-tighter md:text-4xl">Být přední organizací mladých lídrů.</h2>
            <p class=" max-w-[600px]">
              Chceme se stát vedoucí organizací, která inspiruje a podporuje mladé lidi v jejich snaze o pozitivní
              změnu. Budujeme silnou komunitu, která se navzájem motivuje a pomáhá realizovat smysluplné projekty.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="w-full py-12 md:py-24 lg:py-32  grid place-items-center bg-primary text-base-100">
    <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <div class="space-y-3">
        <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join the Movement</h2>
        <p class="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
          Become a part of the Junior Chamber International community and help create a better world.
        </p>
      </div>
      <div class="mx-auto w-full max-w-sm space-y-2">
        <form class="flex space-x-2">
          <input
              class="input input-bordered w-full max-w-xs text-white"
              placeholder="Enter your email"
              type="email"
          />
          <button
              class="btn "
              type="submit"
          >
            Join Now
          </button>
        </form>
        <p class="text-xs text-base-100-content">
          Sign up to get notified about upcoming events and initiatives.
          <a class="underline underline-offset-2" href="#">
            Terms &amp; Conditions
          </a>
        </p>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import Footer from "~/components/Footer.vue";
</script>