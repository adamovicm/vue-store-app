import AppCustomers from './components/AppCustomers.vue';
import AppProducts from './components/AppProducts.vue';
import AppLatestPurchases from './components/AppLatestPurchases.vue';
import AppBuyProduct from './components/AppBuyProduct.vue';

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
    {
        path: '/products', 
        name: 'products',
        component: AppProducts
    },
    {
        path:'/products/:id', 
        name: 'buy', 
        component: AppBuyProduct
    }
]