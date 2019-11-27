import AppCustomers from './components/AppCustomers.vue';
import AppProducts from './components/AppProducts.vue';
import AppLatestPurchases from './components/AppLatestPurchases.vue';

export const routes = [
    {
        path: '/customers',
        name: 'customers',
        component: AppCustomers,
    },
    {
        path: '/customers/:id',
        name: 'purchases',
        component: AppLatestPurchases
    },
    {path: '/products', component: AppProducts}
]