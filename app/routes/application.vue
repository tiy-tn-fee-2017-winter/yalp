<template lang="html">
  <div class="app">
    <div class="navbar navbar-inverse bg-inverse navbar-toggleable-sm">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button"><span class="navbar-toggler-icon"></span></button>
        <a class="navbar-brand" href="#">Yalp</a>

        <div class="collapse navbar-collapse active" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" v-bind:to="{ name: 'index' }">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" v-bind:to="{ name: 'restaurant-new' }">Add Restaurant</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
