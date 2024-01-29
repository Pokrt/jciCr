<template>
  <div class="z-10 navbar bg-base-100  fixed ">
    <div class="navbar-start">
      <details class="dropdown">
        <summary tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
          </svg>
        </summary>
        <ul class="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52 ">
  <!--         <li>
            <router-link @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)" to="./#about">About</router-link>
          </li>
          <li>
            <details v-click-outside="subNavbarHide">
              <summary class="dropdown">Tickets</summary>
              <ul class="p-2">
                <li>
                  <router-link @click="subNavbarHide($event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)"
                               to="#tickets">Standard tickets
                  </router-link>
                </li>
                <li>
                  <router-link @click="subNavbarHide($event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)"
                               to="#tickets_gala">Gala tickets
                  </router-link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <router-link @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)" to="/#team">Team</router-link>
          </li><li>
            <router-link @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)" to="/#partners">Partners</router-link>
          </li>  --><li>
            <a href="#organizations"   @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)" >Organizations</a>
          </li>
        </ul>
      </details>
      <a href="#" class="btn btn-ghost"><img class="h-full px-0" src="/favicon.svg"></a>
    </div>

    <div class="navbar-center hidden lg:flex ">
      <ul class="menu menu-horizontal px-1">
       <!--  <li>
          <router-link class="text-xl" to="/#about">About</router-link>
        </li>
        <li>
          <details v-click-outside="subNavbarHide">
            <summary class="text-xl">Tickets</summary>
            <ul class="p-2">
              <li>
                <router-link @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)"
                             class="text-xl" to="#tickets">Standard tickets
                </router-link>
              </li>
              <li>
                <router-link @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)"
                             class="text-xl" to="#tickets_gala">Gala tickets
                </router-link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <router-link class="text-xl" to="/#team">Team</router-link>
        </li>    <li>
          <router-link class="text-xl" to="/#partners">Partners</router-link>
        </li>       -->  <li>
          <a href="#organizations" @click="subNavbarHide($event.target.parentElement.parentElement.parentElement)" >Organizations</a>
        </li>
      </ul>
    </div>
    <div class="navbar-end ">
    </div>
  </div>
</template>
<script>
import Tickets from "./Tickets.vue";

export default {
  name: "Navbar",
  components: {Tickets},
  methods: {
    subNavbarHide(el) {
      console.log("subNavbarHide");
      console.log(el);
      el.removeAttribute("open");
    }
  },
}
</script>
<style scoped>

</style>