import Vue from "vue";
import Vuex from "vuex";
import Auth from "@/services/Auth.js" //aqui esta el metodo de login que hace la consulta post con axios
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    islogged:false,
    currentUser:{},
    
  },
  mutations: {
    SET_CURRENT_USER(state, user) { //guarda el usuario identidficado en el localstorage.
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
     
    },
    SET_LOGGED_USER(state,user){ //cuando se refresque la pagina y tenga algun usuario loggeado se asigna por esta mutacion
      state.currentUser = user;
      state.islogged=true;
    },
    LOGOUT(state){
      state.currentUser={}
      state.islogged=false;
      window.localStorage.clear();
    }
  },

  actions: {
    async loginUser({commit}, loginInfo) {
      try {
        let response = await Auth.login(loginInfo);
        let user = response.data.data;
        //obtener informacion del usuario
      
        commit('SET_CURRENT_USER', user); 
        console.log(this.state.currentUser);
      
       
        this.state.islogged=true;
        
        
        return user;
      } catch {
        return {error: "Email/password combination was incorrect.  Please try again."}
      }
      
    },
    SetUserInfo({commit},User){
      if (User!=null) {
        commit("SET_LOGGED_USER",User);
        
      }else{
        console.log("no hay usuario")
      }
    },
    Logout({commit}){
      commit("LOGOUT")
      console.log("Cerraste la sesion")
    }
  },
  modules: {},
});
