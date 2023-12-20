import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      products: [
        { id: 1, name: 'Brosse à Dents Électrique', price: 29.99 },
        { id: 2, name: 'Brosse à Dents Bambou', price: 5.99 },
        { id: 3, name: 'Brosse à Dents Classique', price: 3.99 }
      ]
    };
  },
  getters: {
    // Add getters if needed, for example to get a specific product by ID
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    }
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      const newId = state.products.length > 0 ? state.products[state.products.length - 1].id + 1 : 1;
      state.products.push({ id: newId, ...product });
    }
  },
  actions: {
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', product);
    }
  }
});

export default store;

