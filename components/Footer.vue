<template>
  <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-base-300 bg-base-100">
    <p class="text-xs text-base-content/60">Web vytvořil <a class="link link-primary hover:link-accent" href="https://jan-kadlec.cz" title="Jan Kadlec – AI automatizace pro firmy">Jan Kadlec</a></p>
    <nav class="sm:ml-auto flex gap-4 sm:gap-6">
      <NuxtLink class="text-xs text-base-content/80 hover:text-primary transition-colors" to="/">
        Domů
      </NuxtLink>
      <NuxtLink class="text-xs text-base-content/80 hover:text-primary transition-colors" to="/membership">
        Členství
      </NuxtLink>
      <NuxtLink class="text-xs text-base-content/80 hover:text-primary transition-colors" to="/branches">
        Pobočky & Kontakty
      </NuxtLink>
    </nav>
  </footer>
</template>

