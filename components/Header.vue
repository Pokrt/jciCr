<template>
  <header
      class="w-full bg-base-100 py-4 border-b border-gray-200  grid place-items-center">
    <div class="container px-4 md:px-6 flex items-center justify-between">
      <a class="flex items-center gap-2 font-semibold " href="">
        <img
            src="/JCI - Czech Republic - WHITE.svg"
            class="h-12 w-12"
            alt="JCI Czech Republic Logo"/>
        <span class="text-white text-base ">JCI Czech Republic</span>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-base font-medium">
        <NuxtLink class="text-white hover:text-neutral  " to="/">
          Domů
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
          Pobočky & Kontakty
        </NuxtLink>
        <NuxtLink class="  btn btn-neutral  " to="/membership">
          Členství
        </NuxtLink>
      </nav>
      <div
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden">
        <details class="dropdown dropdown-end">
          <summary tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
          </summary>
          <ul class="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52 ">
            <li>
              <NuxtLink to="/" @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)">Domů
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects" @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)">Projekty
              </NuxtLink>
            </li>   <li>
              <NuxtLink to="/events" @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)">Akce
              </NuxtLink>
            </li> <li>
              <NuxtLink to="/mentioned" @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)">Napsali o nás
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/people" @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)">Lidé
              </NuxtLink>
            </li>  <li>
              <NuxtLink to="/branches" @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)">Pobočky & Kontakty
              </NuxtLink>
            </li> <li>
              <NuxtLink to="/membership" @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)">Členství
              </NuxtLink>
            </li>
          </ul>
        </details>
      </div>


    </div>
  </header>
</template>
<script>
export default {
  methods: {
    subNavbarHide(el) {
      console.log("subNavbarHide");
      console.log(el);
      el.removeAttribute("open");
    }
  },
}
</script>
