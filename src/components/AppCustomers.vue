<template>
  <div>
    <h1>Customers</h1>
    <br>
    <app-insert-customer :customers="customers"/>
    <br>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#id</th>
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
            <router-link :to="`/customers/${index}`" name="purchases">
              <button class="btn btn-outline-primary">Latest Purchases</button>
            </router-link>
          </td>
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
import AppInsertCustomer from '../components/AppInsertCustomer';
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      customers: 'customers/customers',
      // customerIndex: 'customers/customerIndex'
    }),
  },
  methods: {
    removeCustomer(index) {
      if(confirm('Really delete customer ' 
        + this.customers[index].firstName + ' ' 
        + this.customers[index].lastName + '?')) {
        this.$store.dispatch('customers/removeCustomer', index);
      }
    },
  },
  components: {
    AppInsertCustomer
  },
}
</script>