<template>
  <div class="logo-container">
    <router-link to="/home" class="logo-siderbar-logo">
      <img v-if="collapse" src="" />
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
