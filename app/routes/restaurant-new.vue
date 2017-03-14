<template lang="html">
  <div class="">
    <div class="card">
      <form @submit.prevent="save" class="card-block">
        <h2>Add Restaurant</h2>

        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" v-model="formValues.name">
        </div>
        <div class="form-group">
          <label for="name">Category</label>
          <input type="text" class="form-control" v-model="formValues.category">
        </div>
        <div class="form-group">
          <label for="name">Address</label>
          <input type="text" class="form-control" v-model="formValues.address">
        </div>

        <div class="level">
          <div class="level-item">
            <div class="<form-gro></form-gro>up">
              <label for="wait_time">Wait Time</label>
              <rating color="#3dd4e3" icon="clock-o" :rating="formValues.wait_time" @change="(v) => this.formValues.wait_time = v"></rating>
            </div>
          </div>

          <div class="level-item">
            <div class="form-group">
              <label for="wait_time">Flair</label>
              <rating color="#915ecb" icon="magic" :rating="formValues.flair" @change="(v) => this.formValues.flair = v"></rating>
            </div>
          </div>

          <div class="level-item">
            <div class="form-group">
              <label for="wait_time">Price</label>
              <rating color="#64cb5e" icon="dollar" :rating="formValues.price_level" @change="(v) => this.formValues.price_level = v"></rating>
            </div>
          </div>
        </div>


        <h3>Other Information</h3>
        <div class="level">
          <div class="level-item">
            <div class="form-group">
              <div class="form-check">
                <label class="label">
                  <checkbox :value="formValues.formal" @change="(v) => this.formValues.formal = v"></checkbox>
                  Formal Wear Required
                </label>
              </div>
            </div>
          </div>
          <div class="level-item">
            <div class="form-group">
              <div class="form-check">
                <label class="label">
                  <checkbox :value="formValues.take_out" @change="(v) => this.formValues.take_out = v"></checkbox>
                  Take Out Available?
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="form-actions">
          <router-link :to="{name: 'index'}" class="btn btn-info">Back</router-link>
          <button class="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import store from '../store';
import { create } from '../actions/restaurants';

import Rating from '../components/rating-scale.vue';
import Checkbox from '../components/checkbox.vue';

export default {
  components: { Rating, Checkbox },
  data() {
    return {
      formValues: {
        name: '',
        category: '',
        address: '',
        wait_time: 0,
        flair: 0,
        price_level: 0,
        formal: false,
        take_out: false,
      },
    };
  },

  methods: {
    save() {
      store.dispatch(create(this.formValues)).then(() => {
        this.$router.push({ name: 'index' });
      });
    },
  },
};
</script>
