<template>
  <div class="bkcont">
    <h2>Login</h2>
    <form class="form" @submit.prevent="submitHandler">
      <div v-if="error" class=" alert alert-danger" role="alert">
        {{error}}
      </div>
      <label>Email</label>
      <input type="email" name="email" v-model="email" required />
      <label>Password</label>
      <input type="password" name="password" v-model="password" required />
      <button type="submit" name="submit">Login</button>
      <p class="forget-password text-right">
        <router-link to="signup">Sign up </router-link>
        <router-link to="forgot">Forget password? </router-link>
      </p>
    </form>
  </div>
</template>
<script>
import axios from 'axios'
import Toasted from 'vue-toasted'
import VueProgressBar from 'vue-progressbar'
export default {
  name: "login",
  data(){
    return{
      email: "",
      password: "",
      error:""
    }
  },
  methods:{
     async submitHandler(){
          try {
              this.$Progress.start();
            const response= await axios.post('https://product-mgt-api.herokuapp.com/api/login', {
                email: this.email,
                password: this.password
          });
          this.$Progress.finish();
          this.$toasted.show("you login successfully")
           localStorage.setItem('token',response.data.token);
           this.$router.push('/list')
          } catch (error) {
            this.$toasted.show("invalid email/password")
           console.log(error);
           this.$Progress.fail();
           
          }
        }
  }
}
</script>