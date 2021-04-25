<template>
  <nav
    class="bg-transparent text-white font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-16 sm:items-baseline w-full"
  >
    <div class="mb-2 sm:mb-0 flex flex-row">
      <div class="h-10 w-10 self-center mr-2">
        <img
          class="h-10 w-10 self-center"
          src="@/assets/images/tailwindcss.svg"
        />
      </div>
      <div>
        <a
          href="/home"
          class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
          >LoginTest</a
        ><br />
        <span class="text-xs text-grey-dark">Test Login Api</span>
      </div>
    </div>

    <div v-if="!islogged">
      <span>No isLogged</span>
    </div>
    <div v-else class="sm:mb-0 self-center">
      <button
        @click="logout()"
        class="mr-15 bg-red-500 w-lg py-2 px-5 rounded-md"
      >
        <!--icono de salir-->
      

        <span class=" rounded-md left-0 inset-y-0 flex items-center pl-3">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
          Salir</span>
      </button>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["islogged", "currentUser"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("Logout");
      this.$router.push("/login");
    },
  },
};
</script>
