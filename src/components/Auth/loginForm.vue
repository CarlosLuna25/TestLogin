<template>
  <div class="container mx-auto my-60">
    <div
      class="bg-gray-300 relative shadow-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto rounded-md"
    >
      <div class="flex justify-left">
        <!--Imagen tomada de randomUser -->
        <img
          src="@/assets/images/tailwindcss.svg"
          alt=""
          class="rounded-full mx-auto w-32 h-32 shadow-2xl border-4 border-gray"
        />
      </div>

      <div class="mt-6 pb-6">
        <h1 class="font-bold text-center text-3xl text-gray-900">
          Bienvenido a TestLogin
        </h1>
        <p class="text-center text-sm text-gray-400 font-medium">
          Inicia sesion para continuar
        </p>
      </div>
      <!-- alerta en caso de error-->
      <div
        v-if="error"
        class="bg-red-300 border border-red-light text-red-dark pl-3 pr-7 py-3 rounded relative"
        role="alert"
      >
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">{{ msg }}</span>
      </div>
      <!-- fin de la alerta-->
      <div class="content-center rounded to w-full p-6 my-2">
        <span
          class="bg-white rounded-md left-0 inset-y-0 flex items-center pl-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <input
            v-model="email"
            type="email"
            class="w-full rounded px-3 py-2"
            placeholder="Email"
            required
          />
        </span>

         <span
          class="bg-white rounded-md left-0 inset-y-0 flex items-center pl-3 mt-2"
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
</svg>
        <input
          required
          v-model="password"
          :type="hide"
          class=" w-full rounded px-3 py-2 mt-2"
          placeholder="Contraseña"
        />

        <!-- para mostrar u oculta password-->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor"  @click="showpass()"  v-if="hide=='password'">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
</svg>

      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 cursor-pointer	" fill="none" viewBox="0 0 24 24" stroke="currentColor" @click="showpass()" v-else>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
</svg>
         </span>

        <button
          @click="login()"
          class="btn-login text-white px-3 py-2 rounded-md w-md mt-4"
        >
          iniciar sesion
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    error: false,
    msg: "",
    hide:"password"
  }),

  methods: {
    showpass(){
      if (this.hide=="text") {
        this.hide="password"
      }else{
        this.hide="text"
      }
      
    },


    async login() {
      let user = await this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.password,
      });
      if (user.error) {
        this.msg = user.error;
        this.error = true;
      } else {
        this.error = false;
        window.setTimeout(() => {
          this.$router.push("/");
        }, 2000);
      }
    },
  },
  beforeCreate() {
    if (this.$store.state.islogged) {
      this.$router.push("/");
    }
  },
};
</script>
