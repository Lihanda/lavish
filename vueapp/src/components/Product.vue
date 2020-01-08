<template>
  <div class="product-box">



    <div class="product-image">
      <img :src="currentProduct.image" alt="">
      <stars :rate="rated(currentProduct.stars)" :totalReviews="currentProduct.totalReviews"/>
    </div>
    <div class="product-info">
      <div class="prod"><h2 class="product-title">{{ currentProduct.name }}</h2></div>
      <div class="prod"><span class="product-price">Ksh {{ currentProduct.price }}</span></div>
      <div class="pr"><btn btnColor="btn btn-large btn-sucess" :cartIcon="true"
      @click.native="addProductToCart(currentProduct)">
        Buy Now
      </btn>
      </div>

    </div>
    <modal>{{ currentProduct.details }}</modal>




  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';
import stars from './Stars';
import modal from './Modal';

export default {
  components: {
    btn,
    stars,
    modal,
  },

  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
    }),
  },

  methods: {
    ...mapActions([
      'addProduct',
      'showOrHiddenModal',
    ]),
    addProductToCart(product) {
      this.addProduct(product);
    },
    rated(rate) {
      return `${rate * 20}%`;
    },
    openModal() {
      this.showOrHiddenModal();
    },
  },

};
</script>

<style scoped>
  .product-box {
    width: 800px;
    height: 400px;
    margin: 50px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .cloz{width:35px;height:35px;float:right;}

  .cloz-icon {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 0;
    background-color: #E0E0E0;
    color: #fff;
    cursor: pointer;
  }
  .prod{width:290px;height:40px;padding-top:60px;}
  .pr{width:290px;height:40px;padding-top:50px;}

  .product-image {
    width: 300px;
  }

  .product-info {
    width: 400px;
    align-self: flex-start;
  }

  .product-title {
    font-weight: normal;

  }

  .product-price {
    font-size: 2em;
    font-weight: bolder;
  }

  .product-box button {
    width: 300px;
    margin: .3em 0;
  }
</style>
