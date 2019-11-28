<template>
  <div>
    <h2>Latest purchases from: </h2>
    <h3>{{customers[customerIndex].firstName}} {{customers[customerIndex].lastName}}</h3>
    <h4>Customer id: {{customers[customerIndex].id}}</h4>
    <h4>Email: {{customers[customerIndex].email}}</h4>
    <br>
    <ul class="list-group">
      <li 
        class="list-group-item" 
        v-for="(productIndex, index) in customers[customerIndex].purchases" 
        :key="index"
      >{{ products[productIndex].title }}</li>
    </ul>
    <hr>
    <br>
    <router-link to="/customers"><button class="btn btn-primary">Return to customers</button></router-link>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
// import CustomerService from '../services/CustomerService.js';
export default {
  data() {
    return {
      customerIndex: 0,
      customer: {}
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/products',
      customers: 'customers/customers'
    })
  },
  created() {
    this.customerIndex = this.$route.params.id;
    // console.log(this.$route.params.id)
    // this.customer = (new CustomerService).findCustomer(this.$route.params.id);
  }
}
</script>