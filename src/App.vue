<template>
  <div class="container">
    <ul class="nav">
      <router-link to="/customers" tag="li" class="nav-link">
        <a class="nav-link">Customers</a>
      </router-link>
      <router-link to="/products" tag="li" class="nav-link">
        <a class="nav-link">Products</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// import ProductService from './services/ProductService';
// import CustomerService from './services/CustomerService';

export default {
  data() {
    return {
      // products: (new ProductService).products,
      // customers: (new CustomerService()).customers
    }
  }
}
</script>