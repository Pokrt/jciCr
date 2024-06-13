<script >


</script>

<template>
<header class="w-full bg-gray-100 dark:bg-base-100 py-4 border-b border-gray-200 dark:border-gray-700 grid place-items-center">
  <div class="container px-4 md:px-6 flex items-center justify-between">
    <a class="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50" href="#">
      <img
       src="/logo_white.svg"
        class="h-12 w-12"
       alt="JCI Czech Reoublic Logo"/>
      <span>JCI Czech Republic</span>
    </a>
    <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
      <NuxtLink class="text-white hover:text-neutral  " to="/">
        Home
      </NuxtLink>
      <NuxtLink class="text-white hover:text-neutral " to="/projects">
        Projekty
      </NuxtLink>
      <NuxtLink class="text-white hover:text-neutral " to="/events">
        Akce
      </NuxtLink>
      <NuxtLink class="text-white hover:text-neutral " to="/mentioned">
        Napsali o nás
      </NuxtLink>
      <NuxtLink class="text-white hover:text-neutral " to="/people">
        Lidé
      </NuxtLink>
      <NuxtLink class="text-white hover:text-neutral " to="/branches">
        Pobočky
      </NuxtLink>
      <NuxtLink class="text-white hover:text-neutral  btn-disabled" to="#">
        Kontakty
      </NuxtLink>
      <NuxtLink class="text-white hover:text-neutral " to="/membership">
        Členství
      </NuxtLink>
    </nav>
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden">
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
        class="h-6 w-6"
      >
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
      </svg>
      <span class="sr-only">Toggle navigation</span>
    </button>
  </div>
</header>
</template>