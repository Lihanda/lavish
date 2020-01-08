<template>
  <listOfProducts :products="getHis"/>
</template>

<script>
import { mapGetters } from 'vuex';
import listOfProducts from './ListOfProducts';

export default {
  components: {
    listOfProducts,
  },

  computed: {
    ...mapGetters([
      'getHis',
    ]),
  },
};
</script>

<style>
</style>
