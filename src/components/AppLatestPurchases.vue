<template>
  <div>
    <h2>Latest purchases from: </h2>
    <h3>{{customer.firstName}} {{customer.lastName}}</h3>
    <h4>Customer id: {{customer.id}}</h4>
    <h4>Email: {{customer.email}}</h4>
    <br>
    <ul class="list-group">
      <li class="list-group-item" v-for="(product, index) in customer.purchases" :key="index">{{ product }}</li>
    </ul>
    <hr>
    <br>
    <router-link to="/customers"><button class="btn btn-primary">Return to customers</button></router-link>
  </div>
</template>

<script>
import CustomerService from '../services/CustomerService.js';
export default {
  data() {
    return {
      customers: (new CustomerService).customers,
      customer: {}
    }
  },
  created() {
    this.customer = (new CustomerService).findCustomer(this.$route.params.id);
  }
}
</script>