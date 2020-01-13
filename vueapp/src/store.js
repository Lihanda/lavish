import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    his: [
      {
        name: 'EXPLORER MONT BLANC',
        price: 2259,
        image: 'https://d29pz51ispcyrv.cloudfront.net/images/I/z9bgLzF8FGJAPJQNzTQZOote10r.MD256.jpg',
        stars: 5,
        totalReviews: 230,
        details: ' edp 125 ml',
        id:1
      },
      {
        name: 'TOMFORD BLACK ORCHID',
        price: 2284,
        image: 'https://images.morele.net/i256/905452_1_i256.jpeg',
        stars: 3.4,
        totalReviews: 20,
        details: 'edp 100ml',
        id:1
      },
      {
        name: 'DIOR HOMME INTENSE',
        price: 1490,
        image: 'https://www.parfumcenter.nl/media/catalog/product/cache/1/image/256x/9df78eab33525d08d6e5fb8d27136e95/d/i/dior_homme_intense.jpg',
        stars: 1,
        totalReviews: 1,
        details: 'edp 100ml',
        id:1
      },

      {
        name: 'X CALVIN KLEIN Eternity',
        price: 1490,
        image: 'https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductList/84APQO7RJG_183639_front.jpg',
        stars: 1,
        totalReviews: 1,
        details: 'edp 100ml',
        id:1
      },

      {
        name: 'MR BURKBERRY',
        price: 1490,
        image: 'https://www.hyderabaddutyfree.com/product-images/small/13122026-small.jpg',
        stars: 1,
        totalReviews: 1,
        details: 'edp 100ml',
        id:1
      },

      {
        name: 'LEGEND',
        price: 1490,
        image: 'https://images-na.ssl-images-amazon.com/images/I/31GwrCtDXAL.jpg',
        stars: 1,
        totalReviews: 1,
        details: 'edp 100ml',
        id:1
      },


    ],
    hers: [
      {
       name: 'VALENTINO UOMO',
       price: 1199,
       image: 'https://amorypsique.caehost.net/wp-content/uploads/2019/11/valentino-uomo.jpg',
       stars: 0,
       totalReviews: 0,
       details: ' edt 100ml',
       id:2
     },
     {
       name: 'CAROLINA HERRERA ',
       price: 929,
       image: 'https://s3-eu-west-1.amazonaws.com/media-gbr-buyviu-com/products/afe3986f500e17111cbeac4f04532a0a_image_1_thumb.png',
       stars: 1.5,
       totalReviews: 11,
       details: 'edp 80ml Body lotion',
       id:2
     },
     {
       name: 'DIOR POISON GIRL ',
       price: 3949,
       image: 'https://s3-eu-west-1.amazonaws.com/media-gbr-buyviu-com/products/5d2ec6740db345fd5c53bf7b4f450a19_image_1_thumb.png',
       stars: 1,
       totalReviews: 2,
       details: 'EDP 100ml',
       id:2
     },

     {
       name: 'COCO MADEMOISELLE ',
       price: 3949,
       image: 'https://www.kixdutyfree.jp/sp/en/images/item/3301103859_1_m.jpg',
       stars: 1,
       totalReviews: 2,
       details: 'EDP 100ml',
       id:2
     },

     {
       name: 'ROSE OF NO MANS LAND ',
       price: 3949,
       image: 'https://www.ahlens.se/INTERSHOP/static/BOS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductList/27APC37I4I_88506481_front.jpg',
       stars: 1,
       totalReviews: 2,
       details: 'EDP 100ml',
       id:2
     },

     {
       name: 'MRS DIOR',
       price: 3949,
       image: 'https://www.ahlens.se/INTERSHOP/static/WFS/Ahlens-AhlensSE-Site/-/Ahlens/sv_SE/ProductList/38APLT7V4B_3348901419345_front.jpg',
       stars: 1,
       totalReviews: 2,
       details: 'EDP 100ml',
       id:2
     },
    ],

    

    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    getHis: state => state.his,
    getHers: state => state.hers,
    getAllProducts: state => state.his.concat(state.hers),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product);
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1);
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product;
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal;
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart;
    },
  },

  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
