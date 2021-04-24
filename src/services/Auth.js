import axios from "axios";
const baseUrl= "http://loyal_api.leackstat.info/api/v1"; //por lo general lo guardo en un archivo .env

export default {
  
    login(user){
        const data= user;
        return axios.post(baseUrl+'/login',data);
    }
    
}
