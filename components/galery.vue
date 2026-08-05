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

    <!-- Mobile / tablet: native swipe carousel -->
    <div class="w-full pt-10 xl:hidden lg:pt-0">
      <div
          ref="track"
          @scroll="onScroll"
          class="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div v-for="src in images" :key="src" class="flex w-full shrink-0 snap-center justify-center px-1">
          <img
              :src="src"
              alt="Fotografie ze setkání členů JCI"
              draggable="false"
              class="w-full max-w-sm rounded-xl object-cover object-center"
          />
        </div>
      </div>
      <div class="mt-4 flex justify-center gap-2">
        <span
            v-for="(src, idx) in images"
            :key="src"
            class="h-2 w-2 rounded-full transition-colors"
            :class="idx === i ? 'bg-jci-blue' : 'bg-jci-black/20'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const images = ['/epm.jpg', '/czeko.jpg', '/kotel.jpg']
const track = ref(null)
const i = ref(0)
// ponytail: index from scroll position — native snap does the swiping, this just syncs the dots.
const onScroll = () => {
  const el = track.value
  if (el) i.value = Math.round(el.scrollLeft / el.clientWidth)
}
</script>
