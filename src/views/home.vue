<template>
    <div class="bkcont">
        <h1> hello there</h1>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return{
            user: null,
        }
    },

    async created(){
        const response = await axios.get();
    }
}
</script>
