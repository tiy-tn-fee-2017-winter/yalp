<template lang="html">
  <div class="">
    <div class="card">
      <form @submit.prevent="save" class="card-block">
        <h2>Login</h2>

        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" v-model="formValues.username">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="formValues.password">
        </div>

        <div class="form-actions">
          <router-link :to="{name: 'register'}" class="btn btn-info">Register</router-link>
          <button class="btn btn-success">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      formValues: {
        username: '',
        password: ''
      },
    };
  },

  methods: {
    save() {

    },
  },
};
</script>
