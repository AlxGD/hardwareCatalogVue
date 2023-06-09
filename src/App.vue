<template>
  <div id="app">
    <Header />
    <ProductList />
  </div>
</template>

<script>
import Header from "@/components/HeaderPage.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  nome: "App",
  components: {
    Header,
    ProductList,
  },
};
</script>

<style>
@import "@/assets/styles.css";

</style>