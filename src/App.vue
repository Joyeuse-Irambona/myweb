<template>
    <div  class="bkcont" id="app">
      <div class="hd">
         <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link> 
       <router-link to="/signup">SignUp</router-link>
       <router-link to="/">LogOut</router-link>
    </nav>
<vue-progress-bar/>
      </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
}
</script>
