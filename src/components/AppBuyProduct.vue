<template>
  <div>
    <h1>Buy {{products[productIndex].title}}</h1>
    <br>
    <h4>Product id: {{products[productIndex].id}}</h4>
    <h4>Available quantity: {{products[productIndex].quantity}}</h4>
    <hr>
    <div class="input-group">
      <select class="custom-select col-sm-4" v-model="selectedCustomer">
        <option v-for="(customer, index) in customers" :key="index" :value="customer">{{customer.firstName}} {{customer.lastName}}</option>
      </select>
    </div>
    <button class="btn btn-success mr-2 mt-2" @click="confirm">Confirm</button>
    <router-link to="/products"><button class="btn btn-danger mr-2 mt-2">Cancel</button></router-link>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      productIndex: 0,
      selectedCustomer: {}
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/products',
      customers: 'customers/customers',
      customerIndex: 'customers/customerIndex'
    })
  },
  methods: {
    confirm() {
      if(Object.keys(this.selectedCustomer).length == 0) {
        alert('Please select a customer first.')
      } else {
        if(this.products[this.productIndex].quantity > 0) {
          this.$store.dispatch('products/reduceStock', this.products[this.productIndex].id);
          this.$store.dispatch('customers/purchaseProduct', {customerId: this.selectedCustomer.id, productId: this.products[this.productIndex].id});
        } else {
          alert('No more products in stock.');
        }
      }
    }
  },
  created() {
    this.productIndex = this.$route.params.id;
    this.selectedCustomer = {};
  }
}
</script>