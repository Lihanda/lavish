<template>
  <div class="product-box">

  <div class="clicked_details">



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

    <div class="related">

    <div class="hbar">Related Items</div>
   

    <div v-if="currentProduct.id == '1'">
      <listOfProducts :products="getHis"/> 
      
      </div>
    <div v-else>
      <listOfProducts :products="getHers"/> 


    </div>



  </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import btn from './Btn';
import stars from './Stars';
import modal from './Modal';
import listOfProducts from './ListOfProducts';

export default {

  
  components: {
    btn,
    stars,
    modal,
    listOfProducts,
    
    
  },

  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
    }),
    ...mapGetters([
      'getHis',
    ]),
    ...mapGetters([
      'getHers',
    ]),


    ...mapGetters({getAll: 'getAllProducts',}),
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
    width: 80%;
    height: 100%;
    margin: 80px auto;
    box-sizing: border-box;
    padding: 1.5em;
    background-color: #fff;
    border-radius: 7px;

  }

  .hbar{width:100%;height:50px;background-color:black;color: white;padding-top: 10px;font-size: 30px;font-weight: 500;}

  .clicked_details{width:94%;height:400px;margin:50px;}
  .related{width:94%;height:100%;}


  .prod{width:290px;height:40px;padding-top:60px;}
  .pr{width:290px;height:40px;padding-top:50px;}

  .product-image {
    width: 300px;
    float:left;
    height:500px;
  }

  .product-info {
    width: 400px;
    float:left;
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
