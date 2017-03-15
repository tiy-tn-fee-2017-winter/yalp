<template lang="html">
  <div class="" v-if="model">
    <div class="card">
      <div class="card-block">
        <restaurant-header :detail="true" :restaurant="model"></restaurant-header>
      </div>
    </div>
    <h2 class="review-title">Reivews</h2>

    <div class="row">
      <div class="col col-sm-12" v-for="review in model.reviews">
        <div class="card">
          <div class="card-block">
            <p>
              <counted-icons :value="review.rating" icon="star fa-fw fa-2x" :color="style.colors.stars"></counted-icons>
              <counted-icons :value="5 - review.rating" icon="star-o fa-fw fa-2x" :color="style.colors.stars"></counted-icons>
            </p>
            <p>{{review.review}}</p>
          </div>
        </div>
      </div>

      <div class="col col-sm-12">
        <div class="card">
          <form @submit.prevent="saveReview" class="card-block">
            <h2>Add Review</h2>

            <div class="form-group">
              <label for="wait_time">Rating</label>
              <rating :color="style.colors.stars" icon="star" :rating="newReview.rating" @change="(v) => this.newReview.rating = v"></rating>
            </div>

            <div class="form-group">
              <label for="name">Review</label>
              <input type="text" class="form-control" v-model="newReview.review">
            </div>

            <div class="form-actions">
              <button class="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { findOne, createReview } from '../actions/restaurants';
import store from '../store';
import colors from '../colors';

import RestaurantHeader from '../components/restaurant-header.vue';
import CountedIcons from '../components/counted-icons.vue';
import Rating from '../components/rating-scale.vue';

export default {
  components: { RestaurantHeader, CountedIcons, Rating },

  data() {
    return {
      restaurants: this.$select('restaurants'),
      model: null,
      newReview: {
        rating: 0,
        review: ''
      },
      style: { colors }
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
    },

    clearReview() {
      this.newReview = {
        review: '',
        rating: 0,
      };
    },

    saveReview() {
      store.dispatch(createReview(this.model.id, this.newReview))
        .then(() => {
          this.clearReview();
        });
    }
  },
};
</script>
