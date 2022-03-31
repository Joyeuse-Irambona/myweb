<template>
    <!-- ======= Team Section ======= -->
    <section id="team" class="team section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Team</h2>
        </div>

        <div class="row">

          <div class="col-lg-6" > 
            <div class="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div class="pic"><img src="assets/img/team/team-1.jpg" class="img-fluid" alt=""></div>
              <div class="member-info" v-for="user in users" :key="user.id">
                <h4>{{users.name}}</h4>
                <span>{{users.email}}</span>
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
         methods: {
        async getusers() {
             const token = localStorage.getItem("token");
          axios.defaults.headers.common["Authorization"] = "Bearer "+token;
            const res = await fetch('http://product-mgt-api.herokuapp.com/api/users', {
                method: 'GET',
                headers: {
                    'Type-Content': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.status === 200) {
                this.users = await res.json();

            }
        }
    },
    mounted() {
        this.getusers();
    }
    }
}   
</script>
