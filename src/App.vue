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
export default {

}
</script>