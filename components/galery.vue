<template>
  <div class="grid w-full grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8 lg:gap-12">
    <!-- Desktop: all photos side by side -->
    <img
        v-for="src in images"
        :key="src"
        :src="src"
        width="300"
        alt="Fotografie ze setkání členů JCI"
        class="mx-auto overflow-hidden rounded-xl object-cover object-center hidden xl:block"
    />

    <!-- Mobile / tablet: JS-driven carousel -->
    <div class="relative w-full pt-10 xl:hidden lg:pt-0">
      <img
          :src="images[i]"
          width="300"
          alt="Fotografie ze setkání členů JCI"
          class="mx-auto w-full max-w-sm rounded-xl object-cover object-center"
      />
      <div class="pointer-events-none absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between">
        <button type="button" @click="prev" aria-label="Předchozí fotografie" class="btn btn-circle pointer-events-auto shadow-md">❮</button>
        <button type="button" @click="next" aria-label="Další fotografie" class="btn btn-circle pointer-events-auto shadow-md">❯</button>
      </div>
      <div class="mt-4 flex justify-center gap-2">
        <button
            v-for="(src, idx) in images"
            :key="src"
            type="button"
            @click="i = idx"
            :aria-label="`Fotografie ${idx + 1}`"
            :aria-current="idx === i"
            class="h-2 w-2 rounded-full transition-colors"
            :class="idx === i ? 'bg-jci-blue' : 'bg-jci-black/20'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const images = ['/epm.jpg', '/czeko.jpg', '/kotel.jpg']
const i = ref(0)
const next = () => (i.value = (i.value + 1) % images.length)
const prev = () => (i.value = (i.value - 1 + images.length) % images.length)
</script>
