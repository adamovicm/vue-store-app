import CustomerService from '../../services/CustomerService.js';

const state = {
    customers: (new CustomerService()).customers
};

const mutations = {
    'ADD_CUSTOMER' (state, customer) {
        state.customers.push(customer);
    },
    'REMOVE_CUSTOMER' (state, index) {
        state.customers.splice(index, 1);
    },
    'PURCHASE_PRODUCT' (state, ids) {
        state.customers.forEach(customer => {
            if(customer.id == ids.customerId) {
                customer.purchases.push(ids.productId);
            }
        });
    }
};

const actions = {
    addCustomer: ({commit}, customer) => {
        commit('ADD_CUSTOMER', customer);
    },
    removeCustomer: ({commit}, index) => {
        commit('REMOVE_CUSTOMER', index);
    },
    purchaseProduct: ({commit}, ids) => {
        commit('PURCHASE_PRODUCT', ids);
    }
};

const getters = {
    customers: state => state.customers,
    customerIndex: state => id => {
        return state.customers.findIndex(customer => customer.id == id);
    } 
};

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}