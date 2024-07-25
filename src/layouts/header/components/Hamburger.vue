<template>
  <div @click="toggleSideBar">
    <!-- 折叠 -->
    <i :class="icon" />
    <!-- 展开 -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('app',['collapsed']),
    icon() {
      return this?.collapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold';
    },
  },
  methods: {
    ...mapActions('app', ['handleSiderBar']),
    toggleSideBar() {
      this.handleSiderBar(!this.collapsed)
    },
  },
};
</script>
