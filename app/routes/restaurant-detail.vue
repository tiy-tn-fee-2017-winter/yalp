<template lang="html">
  <div class="">
    <div class="card">
      <div class="card-block">
        <restaurant-header v-if="model" :detail="true" :restaurant="model"></restaurant-header>
      </div>
    </div>
  </div>
</template>

<script>
import { findOne } from '../actions/restaurants';
import store from '../store';

import RestaurantHeader from '../components/restaurant-header.vue';

export default {
  components: { RestaurantHeader },

  data() {
    return {
      restaurants: this.$select('restaurants'),
      model: null,
    };
  },

  watch: {
    '$route.params.id': 'loadModel',
    restaurants: 'loadModel',
  },

  mounted() {
    store.dispatch(findOne(this.$route.params.id));
  },

  methods: {
    loadModel() {
      this.model = this.restaurants.items.find(({ id }) => id == this.$route.params.id);
    }
  },
};
</script>
