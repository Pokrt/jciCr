<template>
  <section class="relative isolate overflow-hidden bg-base-200">
    <!-- Ripple brand accent -->
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div class="absolute -right-[24%] -top-[45%] aspect-square w-[min(78vw,540px)] md:-right-[12%] md:-top-[60%] md:w-[min(46vw,620px)]">
        <Ripple spin="reverse" />
      </div>
    </div>
    <!-- Legibility scrim -->
    <div class="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true"
         style="background:linear-gradient(100deg,rgba(241,248,253,.96) 0%,rgba(241,248,253,.66) 40%,rgba(241,248,253,0) 72%)"></div>

    <div class="relative z-[2] mx-auto w-full max-w-6xl px-4 md:px-6 py-16 md:py-24 lg:py-28">
      <h1 class="max-w-[20ch] text-balance font-extrabold leading-[1.02] tracking-[-0.035em] text-jci-black text-[clamp(2.1rem,4.8vw,3.6rem)]">
        <slot name="title">{{ title }}</slot>
      </h1>
      <p v-if="lead || $slots.lead"
         class="mt-5 max-w-[58ch] leading-relaxed text-base-content/70 text-[clamp(1.02rem,1.4vw,1.2rem)]">
        <slot name="lead">{{ lead }}</slot>
      </p>
      <div v-if="$slots.actions" class="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title?: string; lead?: string }>()
</script>
