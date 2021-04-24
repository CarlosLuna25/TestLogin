<template>
  <div>
    <navbar />
    <!--Container del home-->

    <div class="container mx-auto my-60 py-10" >
      <div>
        <div
          class="bg-white rounded-md relative shadow-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto"
        >
          <div class="flex justify-center">
            <!--Imagen tomada de randomUser -->
            <img
              src="https://randomuser.me/api/portraits/men/94.jpg"
              alt=""
              class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-black"
            />
          </div>

          <div class="mt-16 pb-6">
            <h1 class="font-bold text-center text-3xl text-gray-900">
              Bienvenido Eduard Pantazi
            </h1>
            <p class="text-center text-sm text-gray-400 font-medium">
              Te has logueado correctamente
            </p>
            <p>
              <span> </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/nav/navbar.vue";
export default {
  components: {
    navbar,
  },
};
</script>
