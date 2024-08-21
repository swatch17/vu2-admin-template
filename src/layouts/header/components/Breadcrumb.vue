<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      {{ fullPath }}
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import router from '@/router';
import { getAllParentPath } from '@/router/helper';

export default {
  data() {
    return {};
  },
  computed: {
    fullPath() {
      console.log(this.$router)
      return this.$router.currentRoute.fullPath;
    },
  },


  mounted() {
    this.getRouter();
    console.log(this.$router);
  },
  methods: {
    getRouter() {
      console.log(router.matcher.getRoutes());
    },
  },
};
</script>
