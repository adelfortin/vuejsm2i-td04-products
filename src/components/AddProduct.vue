<template>
  <div class="add-product-form">
    <h1>Ajouter un Nouveau Produit</h1>
    <form @submit.prevent="submitProduct">
      <div class="form-group">
        <label for="productName">Nom du Produit:</label>
        <input id="productName" v-model="newProduct.name" type="text" required>
      </div>
      <div class="form-group">
        <label for="productPrice">Prix:</label>
        <input id="productPrice" v-model.number="newProduct.price" type="number" required>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'AddProduct',
  data() {
    return {
      newProduct: {
        name: '',
        price: 0
      }
    };
  },
  methods: {
    ...mapActions(['addProduct']),
    submitProduct() {
      this.addProduct(this.newProduct).then(() => {
        this.newProduct = { name: '', price: 0 };
        this.$router.push('/'); // Navigate back to the homepage
      });
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  }
};
</script>

<style>
  .add-product-form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
</style>

