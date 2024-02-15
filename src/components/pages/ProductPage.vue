<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <p>Prix: {{ product.price }} €</p>
  </div>
  <div v-else>
    <p>Produit non trouvé.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductPage',
  computed: {
    ...mapState({
      product(state) {
        const productId = parseInt(this.$route.params.id);
        return state.products.find(p => p.id === productId);
      }
    })
  }
};
</script>

<style>
/* Add your styles here */
</style>

