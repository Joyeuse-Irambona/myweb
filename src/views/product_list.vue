<template>
    <div class="bkcont">
        <h2>Product list</h2>
        <p>You want to add a product <router-link to="/add">Add new</router-link></p>
        <hr />

        <div>
            <div v-if="len">
                <div class="list" v-for="product in products" :key="product.id">         
                    <router-link  :to="{ name: 'product', params: { id: product.name } }">
                        <div class="product">
                            <h3>{{ product.name }}</h3>
                            <p>{{ product.price }}</p>
                            <p class="auth">{{ product.description }}</p>
                        </div>
                    </router-link>
                </div>
            </div>                 

            <div v-else class="noProduct">
                <h3>You have not yet add any product</h3>
                <router-link to="add/">Add new product</router-link>
            </div>

      </div>
  </div>
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