<template>
  <div class="notifications">
    <h1>Notifications page</h1>
    <button @click="show">Click me to show notification</button>
  </div>
</template>
<script>
  export default {
    name: "notifications-page",
    methods: {
      show() {
        this.$notify({
          group: "demo",
          type: "error",
          text: "This is an error notification",
        });
      },
    },
  };
</script>
