<template>
  <div class="products">
    <h1>Products</h1>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <input type="number" v-model.number="product.quantity" />
        {{ product.name | capitalize }}
        <span v-if="product.quantity === 0">- OUT OF STOCK</span>
        <button @click="addProductQuantityByOne(product)">Add</button>
      </li>
    </ul>
    <h2>Total Inventory: {{ totalProducts }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    fetch('https://api.myjson.com/bins/74l63')
      .then(res => res.json())
      .then(json => {
        this.products = json.products;
      });
  },
  computed: {
    totalProducts() {
      return this.products.reduce((sum, product) => {
        return sum + product.quantity;
      }, 0);
    }
  },
  methods: {
    addProductQuantityByOne(product) {
      product.quantity += 1;
    }
  },
  filters: {
    capitalize(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products {
  width: 400px;
  margin: auto;
}

.products ul {
  list-style-type: disc;
}

.products ul li {
  list-style-type: disc;
  text-align: left;
}
</style>
