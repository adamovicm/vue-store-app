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
          <td><button class="btn btn-outline-primary" @click="increment(product.id)">+</button></td>
          <td><button class="btn btn-outline-danger" @click="decrement(product.id)">-</button></td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr v-for="(product, index) in filteredProducts" :key="index">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.quantity }}</td>
          <td><button class="btn btn-outline-primary" @click="increment(product.id)">+</button></td>
          <td><button class="btn btn-outline-danger" @click="decrement(product.id)">-</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductService from '../services/ProductService';
export default {
  // props: ['products'],
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
    },
    increment(id) {
      // let foundProductIndex = this.products.find(product => product.id == id);
      // let index = this.products.indexOf(this.products.filter(product => product.id == id));
      this.products.forEach(product => {
        if (product.id == id) {
          product.quantity ++;
        }
      })
      // console.log(index);
      // foundProduct.quantity ++;
    },
    decrement(id) {
      console.log(id);
    }
  }
}
</script>