<template>
    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row" v-for="user in users" :key="user.id">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""></div>
              <div class="member-info">
                <h4>{{users.name}}</h4>
                <span>{userS.email}}</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href=""><i class="ri-facebook-fill"></i></a>
                  <a href=""><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          
        </div>

      </div>
    </section><!-- End Team Section -->
</template>
<script>
import axios from 'axios'
export default {
    name:'team',
    data() {
        return{
            users:[]
        }
    },
    methods:{
        async getUser(){
            try {
                const token = localStorage.getItem("token");
                const response= await axios.get('http://product-mgt-api.herokuapp.com/api/users')
            } catch (error) {
                console.log(Error);
            }
        }
    }
    
}
</script>
