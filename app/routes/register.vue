<template lang="html">
  <div class="">
    <div v-if="users.loading === 'error'" class="alert alert-danger">
      <h2>There was an error creating this user</h2>
    </div>
    <div class="card">
      <pre>{{users}}</pre>
      <form v-on:submit.prevent="save" class="card-block">
        <h2>Register</h2>

        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" v-model="formValues.username">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" v-model="formValues.password">
        </div>

        <div class="form-actions">
          <router-link :to="{name: 'login'}" class="btn btn-info">Login</router-link>
          <button class="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import store from '../store';
import userResource from '../resources/user';
// const { actionCreators: { create } } = userResource;
const create = userResource.actionCreators.create;

export default {
  data() {
    return {
      users: this.$select('users'),
      formValues: {
        username: '',
        password: ''
      },
    };
  },

  methods: {
    save() {
      // Dispatch a new create action
      store.dispatch(create(this.formValues))
        .then(() => {
          this.$router.push({ name: 'login' });
        }).catch(() => {});
    },
  },
};
</script>
