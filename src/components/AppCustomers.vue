<template>
  <div>
    <h1>Customers</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="index">
          <td>{{ customer.id }}</td>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td>
            <button 
              class="btn btn-danger"
              @click.prevent="removeCustomer(index)">Remove</button></td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import { customers } from '../services/CustomerService.js';
export default {
  data() {
    return {
      customers
    }
  },
  methods: {
    removeCustomer(index) {
      if(confirm('Really delete customer ' 
        + customers[index].firstName + ' ' 
        + customers[index].lastName + '?')) {
        customers.splice(index, 1);
      }
    }
  }
}
</script>

<style>

</style>