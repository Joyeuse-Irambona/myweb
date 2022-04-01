<template>
    <div v-if="product" class="bkb">
        <h2>{{product.name}}</h2>
        <h3>{{product.price}}</h3>
        <h3>{{product.quantity}}</h3>

        <p><strong>Summary: </strong>{{ product.description }}</p>
        <p>{{ product.description }}</p>

        <div class="btn">
            <router-link :to="{ name: 'update', params: { id: product.id } }">Update</router-link>
            <button @click="deleteProduct">Delete</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'
import Toasted from 'vue-toasted'
export default {
    data() {
        return {
            product: {}
        }
    },

    methods: {
        async getProduct() {
            this.$Progress.start();
            const token = localStorage.getItem("token");
          axios.defaults.headers.common["Authorization"] = "Bearer "+token;
            const id = this.$route.params.id;
            const res = await fetch(`http://product-mgt-api.herokuapp.com/api/product/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth_meth': 'token'
                },
            });

            console.log(await res);

            if (res.status === 200) {
                this.product = await res.json();
            }
        },

        async deleteProduct() {
            var sure = window.confirm("are you sure that you want to delete this product");
            if (sure) {
                this.$Progress.start();
                const id = this.$route.params.id;
                const res = await fetch(`http://product-mgt-api.herokuapp.com/api/product/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
                if (res.status === 200) {
                     this.$router.push({ name: 'list' });
                    console.log("got it")
                }
            }
        }
    },

    mounted() {
        this.getProduct();
        const user = localStorage.getItem("token");
        if (!user) {
          this.$router.push('/login');
        }
    }
}
</script>