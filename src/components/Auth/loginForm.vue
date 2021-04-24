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
      <div class="rounded to w-full  p-6 my-2">
        <input
          type="email"
          class="border-solid border w-full rounded px-3 py-2"
          placeholder="Email"
        />
        <input
          type="email"
          class="border-solid border w-full rounded px-3 py-2 mt-2"
          placeholder="Contrasena"
        />

        <button class="btn-login text-white px-3 py-2 rounded-md w-md mt-4 ">
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
  }),
  methods: {
    async login() {
      let user = await this.$store.dispatch("loginUser", {
        email: this.email,
        password: this.password,
      });
      if (user.error) {
        alert(user.error);
      } else {
        alert("welcome " + this.$store.state.userInfo.name);
      }
    },
  },
};
</script>
