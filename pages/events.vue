<template>

  <main class="flex flex-col items-center justify-center h-screen bg-primary text-base-100  ">
    <div class="max-w-md w-full space-y-4 px-4">
      <h1 class="text-3xl font-bold ">
        Akce - Příležitosti na učení se leadershipu v praxi
      </h1>
      <NuxtLink
          class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral"
          to="#events"
      >
        Zobrazit akce
      </NuxtLink>
    </div>
  </main>
  <section id="events" class="py-12 md:py-24 lg:py-32  bg-neutral grid place-items-center text-base-100">
    <div class="container px-4 md:px-6">
      <div class="grid gap-8 md:grid-cols-3">
        <div class="rounded-lg border  text-card-foreground shadow-sm border-base-100" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Leadershipové meetupy
            </h3>
          </div>
          <div class="p-6">
            <p class=" ">
              Pravidelná setkání členů JCI v krajských městech. Pro více informací, aktuální termíny a program
              kontaktujte lokálního prezidenta.
            </p>
          </div>
          <div class="flex items-center p-6">
            <a
                class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral"
                href="#"
            >
              Learn more
            </a>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm border-base-100" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Kick off (leden)</h3>
          </div>
          <div class="p-6">
            <p class=" ">
              Pravidelný víkendový leadership trénink zaměřený na plánování roku, revizi strategického plánu,
              stanovení taktiky, obnovení komunikačních pravidel a trénink v oblasti seberozvoje a podpory motivace v
              týmu. Určeno primárně pro členy lokálních rad a národní rady.
            </p>
          </div>
          <div class="flex items-center p-6">
            <a
                class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral" href="#"
            >
              Learn more
            </a>
          </div>
        </div>
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm border-base-100" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Strategická valná hromada (duben)
            </h3>
          </div>
          <div class="p-6">
            <p class=" ">
              Jednodenní workshop zaměřený na strategii v praxi. Program obsahuje valnou hromadu JCI Czech Republic,
              představení procesu strategického plánování a jeho využití pro osobní, profesní i organizační rozvoj.
              Určeno pro členy aktivní na lokální, národní i mezinárodní úrovni.
            </p>
          </div>
          <div class="flex items-center p-6">
            <a
                class="btn text-base-100 bg-white h-10 px-8 hover:btn-neutral"
                href="#"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
