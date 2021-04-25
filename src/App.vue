<template>
  <div id="app" class="gradiente" >
   
    <router-view />
  </div>
</template>
<script>
export default {
 


 beforeCreate(){
      //metodo para verificar si hay una session activa cuando se recargue la pagina
      let User= JSON.parse(window.localStorage.getItem('currentUser'));
      if (User!=undefined) {
        this.isLogged=true;
        this.$store.dispatch('SetUserInfo', User);
        console.log('Usuario: '+ User.name);

        
      }else{
        console.log('login please');
      }
    
 }
}
</script>

<style  src="./assets/css/main.css"/> 
