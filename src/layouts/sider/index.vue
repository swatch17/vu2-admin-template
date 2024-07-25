<template>
  <el-aside :width="width">
    <layout-menu></layout-menu>
  </el-aside>
</template>

<script>
import Logo from '../logo/index.vue';
import LayoutMenu from '../menu/index.vue';
import { mapGetters } from 'vuex';
import {
  LAYOUT_SIDER_COLLAPSED_WIDTH,
  LAYOUT_SIDER_WIDTH,
} from '@/settings/layoutSetting';

export default {
  components: { Logo, LayoutMenu },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('app', ['collapsed']),
    width() {
      return (
        (this.collapsed
          ? LAYOUT_SIDER_COLLAPSED_WIDTH
          : LAYOUT_SIDER_WIDTH) + 'px'
      );
    },
  },
};
</script>
