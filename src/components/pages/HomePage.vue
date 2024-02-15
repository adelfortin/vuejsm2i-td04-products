<template>
  <div class="product-list">
    <h1>Produits de Brosse à Dents</h1>
    <div class="products">
      <div class="product-card" v-for="product in products" :key="product.id" @click="goToProduct(product.id)">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">Prix: {{ product.price }} €</p>
      </div>
    </div>
    <!-- Add Product Button -->
    <button @click="goToAddProduct" class="add-product-btn">Ajouter un Produit</button>
  </div>
</template>


<script>
import { mapState } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'HomePage',
  computed: {
    ...mapState(['products']),
  },
  setup() {
    const router = useRouter();

    const goToProduct = (id) => {
      router.push({ name: 'Product', params: { id } });
    };

    const goToAddProduct = () => {
      router.push('/add-product'); // Adjust as per your route setup
    };

    return { goToProduct, goToAddProduct };
  },
};
</script>

<style>
.product-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.product-name {
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
}

.product-price {
  color: #555;
  font-size: 16px;
}

h1 {
  color: #444;
  margin-bottom: 30px;
}
.add-product-btn {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-product-btn:hover {
  background-color: #0056b3;
}
</style>

