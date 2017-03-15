<template lang="html">
  <div class="">
    <h2 class="title">Welcome to Yalp!</h2>

    <div class="row">
      <template v-if="restaurants.loading">
        <div class="col-sm-12 col-md-4 col" v-for="i in 3">
          <div class="card">
            <div class="card-block animated-background">
              <h2 class="placeholder-block"></h2>
              <p class="restaurant__info">
                <counted-icons class="placeholder-text" :value="5" icon="dollar" :color="style.colors.disabled"></counted-icons>
                <span class="placeholder-block placeholder-inline"></span>
              </p>

              <div class="restaurant__more">
                <button disabled class="btn btn-outline-secondary"><span class="placeholder-text-block"></span></button>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="col-4" v-for="restaurant in restaurants.items">
          <div class="card">
            <div class="card-block">
              <restaurant-header :restaurant="restaurant">
                <div class="restaurant__more">
                  <router-link class="btn btn-outline-primary" :to="{ name: 'restaurant-detail', params: { id: restaurant.id } }">Read More</router-link>
                </div>
              </restaurant-header>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { findAll } from '../actions/restaurants';
import store from '../store';

import colors from '../colors';

import CountedIcons from '../components/counted-icons.vue';
import RestaurantHeader from '../components/restaurant-header.vue';

export default {
  components: {
    CountedIcons,
    RestaurantHeader
  },
  data() {
    return {
      restaurants: this.$select('restaurants'),
      style: { colors }
    };
  },

  mounted() {
    store.dispatch(findAll());
  }
};
</script>
