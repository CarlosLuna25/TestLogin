<template>
    
    <nav class=" bg-transparent	 text-white font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-16   sm:items-baseline w-full">

  <div class="mb-2 sm:mb-0 flex flex-row
  ">
    <div class="h-10 w-10 self-center mr-2">
      <img class="h-10 w-10 self-center" src="@/assets/images/tailwindcss.svg" />
    </div>
    <div>
      <a href="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">LoginTest</a><br>
      <span class="text-xs text-grey-dark">Test Login Api</span>
    </div>
  </div>

  <div class="sm:mb-0 self-center">
      <router-link to="/Logout" class="mr-15"> <span class="font-semibold  tracking-tight">Salir</span>  </router-link>  
  </div>
</nav>
</template>