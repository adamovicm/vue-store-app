import AppCustomers from './components/AppCustomers.vue';
import AppProducts from './components/AppProducts.vue';
// import AppInsertCustomer from './components/AppInsertCustomer.vue';

export const routes = [
    {
        path: '/customers',
        name: 'customers',
        component: AppCustomers,
        // children: [{
        //     path: 'insert',
        //     name: 'insert-customer',
        //     component: AppInsertCustomer
        // }]
    },
    {path: '/products', component: AppProducts}
]