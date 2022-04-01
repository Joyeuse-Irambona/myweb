<template>
  <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>SIGN IN</h2>
        </div>

        <div class="row">
             <div class="col-lg-5 d-flex align-items-stretch">
    

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form" @submit.prevent="submitHandler()">
              <div class="row">
          
              <div class="form-group">
                <label for="name">Email</label>
                <input type="email" class="form-control" name="email" v-model="email" id="subject" required>
              </div>
                <div class="form-group ">
                  <label for="name">Password</label>
                  <input type="password" class="form-control" name="password" v-model="password"  id="password" required>
                </div>
          
                <div class="text-center"><button type="submit">Login</button></div>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

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
           this.$store.dispatch('token', response.data.token);
           this.$router.push('/list')
          } catch (error) {
            this.$toasted.show("invalid email/password")
           console.log(error);
           this.$Progress.fail();
           
          }
        }
  },
  mounted() {
    const user = localStorage.getItem("token");
    if (user) {
      this.$router.push('/list');
    }
  }
}
</script>