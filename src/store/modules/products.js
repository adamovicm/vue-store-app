import ProductService from '../../services/ProductService.js';

const state = {
    products: (new ProductService()).products
};

const mutations = {
    'ADD_STOCK' (state, productId) {
        state.products.forEach(product => {
            if(product.id == productId) {
                product.quantity++;
            }
        })
    },
    'REDUCE_STOCK' (state, productId) {
        state.products.forEach(product => {
            if(product.id == productId && product.quantity > 0) {
                product.quantity--;
            }
        })
    }
};

const actions = {
    addStock: ({commit}, productId) => {
        commit('ADD_STOCK', productId);
    },
    reduceStock: ({commit}, productId) => {
        commit('REDUCE_STOCK', productId);
    }
};

const getters = {
    products: state => state.products
};

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}