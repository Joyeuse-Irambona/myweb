<template>
<!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>SIGN UP</h2>
        </div>

        <div class="row">
             <div class="col-lg-5 d-flex align-items-stretch">
    

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form" @submit.prevent="submitHandler()">
              <div class="row">
                  <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" class="form-control" name="subject" v-model="name" id="subject" required>
              </div>
              <div class="form-group">
                <label for="name">Email</label>
                <input type="email" class="form-control" name="email" v-model="email" id="subject" required>
              </div>
                <div class="form-group col-md-6">
                  <label for="name">Password</label>
                  <input type="password" class="form-control" name="password" v-model="password"  id="password" required>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Confirm Password</label>
                  <input type="password" class="form-control" name="password" v-model="password_confirmation" id="password" required>
                </div>
                <div class="text-center"><button type="submit">Sign Up</button></div>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

         
</template>
<script>
import axios from 'axios'
export default {
    name: "register",
    data() {
        return{
            name:"",
            email:"",
            password:"",
            password_confirmation:"",
            error: "",
            isSubmitted: false
    };
    },

    methods : {
        submitHandler() {
                this.isSubmitted = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }
                alert("SUCCESS!" + JSON.stringify(this.data));
        }, 

         async submitHandler(){
          try {
              this.$Progress.start();

              const response= await axios.post('http://product-mgt-api.herokuapp.com/api/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation

          });
          this.$Progress.finish();
           this.$router.push('/login')
          } catch (error) {
              this.$Progress.fail();
              this.$toasted.show("email has been taken")
              console.log(error)
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
