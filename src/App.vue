<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Notifications</router-link>
    </div>
    <notifications
      :group="group"
      :type="type"
      :duration="duration"
      :position="position"
    />
    <router-view />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        duration: -1,
        group: "demo",
        position: "top center",
        type: "info",
      };
    },
  };
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .vue-notification.info {
    border-left: 0;
    background-color: orange;
  }
  .vue-notification.success {
    border-left: 0;
    background-color: limegreen;
  }
  .vue-notification.error {
    border-left: 0;
    background-color: red;
  }
</style>
