<template>
  <div>
    <h1>Products</h1>
    <br>
    <div class="input-group">
      <input 
        type="text" 
        class="form-control col-md-4" 
        placeholder="Filter Products" 
        v-model="filterText" 
        @input="filter"
      >
    </div>
    <br>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody v-if="filterText === ''">
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr v-for="(product, index) in filteredProducts" :key="index">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductService from '../services/ProductService';
export default {
  data() {
    return {
      products: (new ProductService).products,
      filteredProducts: [],
      filterText: ''
    }
  },
  methods: {
    filter() {
      this.filteredProducts = this.products.filter(
          product => product.title.toLowerCase().indexOf(
            this.filterText.toLowerCase().trim()) !== -1);
    }
  }
}
</script>