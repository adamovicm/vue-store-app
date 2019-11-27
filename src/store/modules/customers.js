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
    }
};

const actions = {
    addCustomer: ({commit}, customer) => {
        commit('ADD_CUSTOMER', customer);
    },
    removeCustomer: ({commit}, index) => {
        commit('REMOVE_CUSTOMER', index);
    }
};

const getters = {
    customers: state => state.customers
};

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}