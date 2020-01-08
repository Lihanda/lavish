import Vue from 'vue';
import Router from 'vue-router';
import AllProducts from '../components/AllProducts';
import AllHers from '../components/AllHers';
import AllHis from '../components/AllHis';
import Product from '../components/Product';
import CartCheckout from '../components/CartCheckout';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'All Products',
      component: AllProducts,
    },
    {
      path: '/hers',
      name: 'Hers',
      component: AllHers,
    },
    {
      path: '/his',
      name: 'His',
      component: AllHis,
    },
    {
      path: '/product-details',
      name: 'Product',
      component: Product,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout,
    },
  ],
});
