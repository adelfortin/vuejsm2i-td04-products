<template>
  <div v-if="latestProduct" class="new-product">
    <h3>Nouveau Produit Ajouté</h3>
    <p>ID: {{ latestProduct.id }}</p>
    <p>Nom: {{ latestProduct.name }}</p>
    <p>Prix: {{ latestProduct.price }} €</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NewlyAddedProduct',
  computed: {
    ...mapState({
      latestProduct(state) {
        return state.products[state.products.length - 1];
      }
    })
  }
};
</script>

<style>
/* Add your styles here */
</style>

