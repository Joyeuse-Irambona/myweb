<template>
<div>
  <!-- ======= Header ======= -->
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto"><a href="index.html">Electronics</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar">
          <ul>
            <li><router-link to="/" class="a">Home</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
            <li>
              <router-link to="/signup">SignUp</router-link>
            </li>
              <li><router-link to="/team">Team</router-link></li>
          </ul>
          <ul>
            <li><a class="nav-link scrollto" @click.prevent="handleLogout" >Logout</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->
    <vue-progress-bar />
    <router-view />
</div>
  <!-- <div>
    <div>
      <nav class="nav">
        
      </nav>
      
    </div>
    
  </div> -->
</template>
<script>
import axios from 'axios';
import Vuex, { mapGetters} from 'vuex'
import { mapActions } from 'vuex';
export default {
name:'App',  
      accessToken: null,
      data() {
        return {
          isUser : localStorage.getItem("token"),
        }
      },


  methods:{
   handleLogout(){
        localStorage.removeItem('token');
        this.$router.push('/');
      }
      
   
  },


  mounted() {
    console.log("local user: ", this.isUser);
    this.$Progress.finish();
  },


  async created() {
    const response = await axios.get('http://product-mgt-api.herokuapp.com/api/users');
    this.$store.dispatch('token', response.data);

    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
    });
  },
};
</script>
