<template>
    <div class="bkcont">
        <h2>Sign Up</h2>
        <form class="form" @submit.prevent="submitHandler()">

        <div v-if="error" class=" alert alert-danger" role="alert">
        {{error}}
        </div>

            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" v-model="name"
             class="form-control" :class="{ 'is-invalid': isSubmitted && $v.name.$error }" />
             <div v-if="isSubmitted && !$v.name.required" class="invalid-feedback">Name field is required</div>

            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" v-model="email" 
             class="form-control" :class="{ 'is-invalid': isSubmitted && $v.email.$error }" />
                <div v-if="isSubmitted && $v.email.$error" class="invalid-feedback">
                    <span v-if="!$v.email.required">Email field is required</span>
                    <span v-if="!$v.email.email">Please provide valid email</span>
                </div> 
            
            
            <label>Password</label>                  
            <input type="password" name="password" placeholder="Enter your password" v-model="password" 
             class="form-control" :class="{ 'is-invalid': isSubmitted && $v.password }" />
            <div v-if="isSubmitted && $v.password.$error" class="invalid-feedback">
                    <span v-if="!$v.password.required">Password field is required</span>
                    <span v-if="!$v.password.minLength">Password should be at least 5 characters long</span>
                </div>


            <label>Confirm password</label>
            <input type="password" name="password" placeholder="Confirm your password" v-model="password_confirmation" 
             class="form-control" :class="{ 'is-invalid': isSubmitted && $v.password_confirmation.$error }"/>
              <div v-if="isSubmitted && $v.password_confirmation.$error" class="invalid-feedback">
                    <span v-if="!$v.password_confirmation.required">Confirm Password field is required</span>
                    <span v-else-if="!$v.password_confirmation.sameAsPassword">Passwords should be matched</span>
                </div>

            <button type="submit" name="submit">Sign up</button>
        </form>
    </div>
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
              const response= await axios.post('http://product-mgt-api.herokuapp.com/api/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation

          });
         // this.$router.push('/login')
          } catch (error) {
              console.log(error)
          }

          
          
        }
    }
}
</script>
