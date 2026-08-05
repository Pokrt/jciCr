<template>
  <header class="sticky top-0 z-50 w-full border-b border-base-300/70 bg-base-100/85 backdrop-blur-md">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
      <NuxtLink to="/" class="flex items-center gap-2.5" aria-label="JCI Czech Republic — domů">
        <img src="/JCI - Czech Republic.svg" class="h-9 w-auto" alt="JCI Czech Republic" />
        <span class="hidden text-sm font-semibold tracking-tight text-base-content/70 sm:inline">Czech Republic</span>
      </NuxtLink>

      <nav class="hidden items-center gap-0.5 lg:flex">
        <NuxtLink
            v-for="l in links"
            :key="l.to"
            :to="l.to"
            class="rounded-full px-3.5 py-2 text-sm font-medium text-base-content/75 transition-colors hover:bg-jci-blue/10 hover:text-jci-blue"
            exact-active-class="!text-jci-blue bg-jci-blue/10"
        >
          {{ l.label }}
        </NuxtLink>
        <NuxtLink
            to="/membership"
            class="btn btn-primary btn-sm ml-2 h-10 rounded-full border-0 px-5 text-sm font-semibold text-white shadow-sm shadow-jci-blue/30 hover:shadow-md hover:shadow-jci-blue/40">
          Členství
        </NuxtLink>
      </nav>

      <button
          type="button"
          class="btn btn-ghost btn-sm text-base-content lg:hidden"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          aria-label="Menu"
          @click="open = !open">
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
          <line x1="6" x2="18" y1="6" y2="18"></line>
          <line x1="6" x2="18" y1="18" y2="6"></line>
        </svg>
      </button>
    </div>

    <!-- Mobile menu (controlled, no reliance on native <details> toggle) -->
    <div v-if="open" class="lg:hidden">
      <button type="button" tabindex="-1" aria-hidden="true"
              class="fixed inset-x-0 bottom-0 top-16 z-40 w-full cursor-default bg-jci-black/10"
              @click="open = false"></button>
      <nav id="mobile-menu"
           class="absolute right-4 top-[calc(100%+0.5rem)] z-50 flex w-60 flex-col gap-0.5 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-xl">
        <NuxtLink
            v-for="l in links"
            :key="l.to"
            :to="l.to"
            class="rounded-lg px-3 py-2 text-sm font-medium text-base-content/80 transition-colors hover:bg-jci-blue/10 hover:text-jci-blue"
            exact-active-class="!text-jci-blue bg-jci-blue/10"
            @click="open = false">
          {{ l.label }}
        </NuxtLink>
        <NuxtLink
            to="/membership"
            class="btn btn-primary btn-sm mt-1 rounded-lg border-0 text-sm font-semibold text-white"
            @click="open = false">
          Členství
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { label: 'Domů', to: '/' },
  { label: 'Projekty', to: '/projects' },
  { label: 'Akce', to: '/events' },
  { label: 'Napsali o nás', to: '/mentioned' },
  { label: 'Lidé', to: '/people' },
  { label: 'Pobočky', to: '/branches' },
]

const open = ref(false)
const route = useRoute()
// Close the menu on any navigation.
watch(() => route.fullPath, () => { open.value = false })
</script>
