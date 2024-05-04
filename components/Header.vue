<script >


</script>

<template>
<header class="w-full bg-gray-100 dark:bg-gray-800 py-4 border-b border-gray-200 dark:border-gray-700 grid place-items-center">
  <div class="container px-4 md:px-6 flex items-center justify-between">
    <a class="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50" href="#">
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
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
      <span>Junior Chamber International</span>
    </a>
    <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
      <a class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="/">
        Home
      </a>
      <a class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="/projects">
        Projekty
      </a>
      <a class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="/events">
        Akce
      </a>
      <a class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="/mentioned">
        Napsali o nás
      </a>
      <a class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="/people">
        Lidé
      </a>
      <a class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="/branches">
        Pobočky
      </a>
      <a class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50 btn-disabled" href="#">
        Kontakty
      </a>
      <a class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50" href="/membership">
        Členství
      </a>
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