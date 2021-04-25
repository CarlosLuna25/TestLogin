<template>
  <div class="container mx-auto my-60 p-5 rounded-md">
    <div
      class="bg-white relative shadow-xl w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto rounded-md"
    >
      <img src="@/assets/images/404.gif" width="98%" alt="" />
   

    <button
      @click="tohome()"
      class="mr-15 bg-transparent w-lg py-2 px-5 rounded-md"
    >
      <!--icono de Volver-->

      <span class="rounded-md left-0 inset-y-0 flex items-center pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"
          />
        </svg>
        Volver</span
      >
    </button> 
    </div>
  </div>
</template>
<script>
export default {
   methods:{
       tohome(){
           this.$router.push("/")
       }
   }
}
</script>
