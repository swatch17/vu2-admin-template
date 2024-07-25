<template>
  <el-header
    class="header flex justify-between items-center"
    :style="widthStyle"
  >
    <div class="flex items-center">
      <hamburger />
      <breadcrumb />
    </div>
    <div class="flex items-center">
      <full-screen class="mr-2" />
      <user />
    </div>
  </el-header>
</template>
<script>
import Hamburger from './components/Hamburger.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import User from './components/User.vue';
import FullScreen from './components/FullScreen.vue';
import { mapGetters } from 'vuex';
import {
  LAYOUT_SIDER_COLLAPSED_WIDTH,
  LAYOUT_SIDER_WIDTH,
} from '@/settings/layoutSetting';

export default {
  components: { Hamburger, Breadcrumb, User, FullScreen },
  computed: {
    ...mapGetters('app', ['collapsed']),
    widthStyle() {
      return {
        left: `${
          this.collapsed
            ? LAYOUT_SIDER_COLLAPSED_WIDTH
            : LAYOUT_SIDER_WIDTH
        }px`,
      };
    },
  },
};
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
