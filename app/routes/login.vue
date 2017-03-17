<template lang="html">
  <div class="">
    <div class="alert alert-danger" v-if="error" @click="error = false">
      <h2>There was an error logging in</h2>
    </div>
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
      error: false,
      formValues: {
        username: '',
        password: ''
      },
    };
  },

  methods: {
    save() {
      fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(this.formValues)
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }

        // Still want error handling
        return Promise.reject(res.json());
      }).then((data) => {
        localStorage.jwt = data.token;
      }).catch(() => {
        this.error = true;
      });
    },
  },
};
</script>
