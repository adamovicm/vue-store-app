<template>
  <div>
    <form>
      <h3>Insert a new customer</h3>
      <br>
      <div class="form-row">
        <div class="form-group col-md-2">
          <input type="number" id="id" class="form-control" placeholder="#id" v-model="customer.id">
        </div>
        <div class="form-group col-md-3">
          <input type="text" id="firstName" class="form-control" placeholder="First Name" v-model="customer.firstName">
        </div>
        <div class="form-group col-md-3">
          <input type="text" id="lastName" class="form-control" placeholder="Last Name" v-model="customer.lastName">
        </div>
        <div class="form-group col-md-4">
          <input type="email" id="email" class="form-control" placeholder="Email" v-model="customer.email">
        </div>
      </div>
      <button class="btn btn-primary" @click.prevent="saveCustomer">Save Customer</button>
    </form>
    <br>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      customer: {
        id: '',
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  },
  methods: {
    saveCustomer() {
      let existingCustomer = this.customers.find(customer => customer.id == this.customer.id);
      if(!existingCustomer) {
        this.$store.dispatch('customers/addCustomer', this.customer);
      }

      this.customer = {
        id: '',
        firstName: '',
        lastName: '',
        email: ''
      };
    }
  },
  computed: {
    ...mapGetters({
      customers: 'customers/customers',
      // customerIndex: 'customers/customerIndex'
    })
  }
}
</script>