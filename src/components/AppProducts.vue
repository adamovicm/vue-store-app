<template>
  <div>
    <h1>Products</h1>
    <br>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
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
      products: (new ProductService).products
    }
  }
}
</script>