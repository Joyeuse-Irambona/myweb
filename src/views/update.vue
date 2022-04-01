<template>
    <div class="bkcont">
        <h2>Update Product</h2>
        <hr />

        <form class="form" v-on:submit="updateProduct">
            <label>Name</label>
            <input type="text" name="name" v-model="name" required />
            <label>Description</label>
            <textarea rows="6" name="body" v-model="description" required></textarea>
            <label>Price</label>                    
            <input type="text" name="price" v-model="price" required />
            <label>Quantity</label>
             <input type="text" name="quantity" v-model="quantity" required />
            <button type="submit" name="submit">Update</button>
        </form>
    </div>
</template>

<script>
import Toasted from 'vue-toasted'
import VueProgressBar from 'vue-progressbar'
export default {
    data() {
        return {
             name: "",
            description: "",
            price: "",
            quantity: "",
            product: {}
        }
    },

    methods: {
        async getProduct() {
            this.$progress.start();
            const id = this.$route.params.id;
            const res = await fetch(`http://product-v1.herokuapp.com/api/product/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (res.status === 200) {
                this.product = await res.json();
                this.name = await this.product.name;
                this.description = await this.product.description;
                this.price = await this.product.price;
                this.quantity = await this.product.quantity;
            }
        },

        async updateProduct(e) {
            e.preventDefault();
            this.$progress.start();
            const token = localStorage.getItem("token");
          axios.defaults.headers.common["Authorization"] = "Bearer "+token;
            const id = this.$route.params.id;
            const res = await fetch(`http://product-mgt-api.herokuapp.com/api/product/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.name,
                    description: this.description,
                    price: this.price,
                    quantity: this.quantity
                })
            });

            if (res.status === 200) {
                this.$toasted.show("Data updated")
                this.$router.push({ name: 'produt', params: { id: id } });
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