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
            <li><a class="nav-link scrollto" href="#about">Logout</a></li>
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
export default {
  mounted() {
    this.$Progress.finish();
  },
  created() {
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
