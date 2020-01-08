<template>
  <listOfProducts :products="getHers"/>
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
      'getHers',
    ]),
  },
};
</script>

<style>
</style>
