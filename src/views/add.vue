<template>
  <div class="bkcont">
    <h2>Add New Product</h2>
    <hr />

    <form class="form" @submit.prevent="submitHandler()">
      <label>Name</label>
      <input type="text" name="name" v-model="name" required />
      <label>Description</label>
      <textarea
        rows="6"
        type="text"
        name="description"
        v-model="description"
        required
      />
      <label>Price</label>
      <input type="text" name="price" v-model="price" required />
      <label>Quantity</label>
      <input name="text" v-model="quantity" required />
      <button type="submit" name="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Toasted from 'vue-toasted'
import VueProgressBar from 'vue-progressbar'
export default {
  name: "add",
  data() {
    return {
      name: "",
      description: "",
      price: float,
      quantity: integer,
    };
  },

  methods: {
    async submitHandler() {
      try {
        this.$Progress.start();
        const token = localStorage.getItem("token");
          axios.defaults.headers.common["Authorization"] = "Bearer "+token;
        const response = await axios.post(
          "http://product-mgt-api.herokuapp.com/api/product",
          {
            name: this.name,
            description: this.description,
            price: this.price,
            quantity: this.quantity,
          }
          
        );

        this.$router.push('/list')
      } catch (error) {
        console.log(error);
      }

      if (re.status === 201) {
                this.$toasted.show('data sent');
            }
            else {
                this.$toasted.show('fail to send data');
            }
             e.target.reset();
             this.$router.push({ name: 'list' }); 
    },
  },
};
</script>