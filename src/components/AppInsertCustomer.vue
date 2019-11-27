<template>
  <div>
    <form>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="customerId">id</label>
          <input type="number" id="customerId" class="form-control" v-model="customer.id">
        </div>

        <div class="form-group col-md-3">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" class="form-control" v-model="customer.firstName">
        </div>

        <div class="form-group col-md-3">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" class="form-control" v-model="customer.lastName">
        </div>
        <div class="form-group col-md-4">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-control" v-model="customer.email">
        </div>
      </div>
      <button class="btn btn-primary" @click.prevent="saveCustomer">Save Customer</button>
    </form>
  </div>
</template>

<script>
export default {
  props: [
    'customers',
  ],
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
        this.customers.push(this.customer);
        this.customer = {
          id: '',
          firstName: '',
          lastName: '',
          email: ''
        };
      }
    }
  }
}
</script>