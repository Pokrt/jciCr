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

      <div class="lg:hidden">
        <details ref="mobileMenu" class="dropdown dropdown-end">
          <summary tabindex="0" role="button" class="btn btn-ghost btn-sm text-base-content" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </summary>
          <ul class="menu dropdown-content menu-sm z-20 mt-3 w-60 gap-0.5 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-xl">
            <li v-for="l in links" :key="l.to">
              <NuxtLink :to="l.to" class="rounded-lg font-medium" exact-active-class="text-jci-blue" @click="closeMenu">{{ l.label }}</NuxtLink>
            </li>
            <li class="mt-1">
              <NuxtLink to="/membership" class="btn btn-primary rounded-lg text-white" @click="closeMenu">Členství</NuxtLink>
            </li>
          </ul>
        </details>
      </div>
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

const mobileMenu = ref<HTMLDetailsElement | null>(null)
const closeMenu = () => mobileMenu.value?.removeAttribute('open')
</script>
