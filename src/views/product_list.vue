<template>

<!-- ======= Services Section ======= -->
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Product list</h2>
         
        </div>

        <p>You want to add a product <router-link to="/add">Add new</router-link></p>
        <hr />

        <div class="">


          <div style="justify-content: space-evenly; flex-wrap: wrap; width: 100%;" class="col-xl-3 col-md-6 d-flex align-items-space mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box" style="margin: 10px" v-for="product in products" :key="product.id">
              <div class="icon"><i class="bx bx-layer"></i></div>
              <div class="list">         
                    <router-link  :to="{ name: 'product', params: { id: product.id } }">
                        <div class="product">
                            <h3>{{ product.name }}</h3>
                            <p>{{ product.price }}</p>
                            <p class="auth">{{ product.description }}</p>
                        </div>
                    </router-link>
              </div>    
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Services Section -->

</template>

<script>
import axios from 'axios'
export default {
    name: "home",
    data() {
        return {
                products: [],
            len: Boolean(true)
        }
    },
    methods: {
        async getdata() {
             const token = localStorage.getItem("token");
          axios.defaults.headers.common["Authorization"] = "Bearer "+token;
            const res = await fetch('http://product-mgt-api.herokuapp.com/api/product', {
                method: 'GET',
                headers: {
                    'Type-Content': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.status === 200) {
                this.products = await res.json();

            }
        }
    },
    mounted() {
        this.getdata();
    }
}
</script>