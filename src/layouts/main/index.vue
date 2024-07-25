<template>
<el-main>
  <div class="app-main">
    <router-view />
  </div>
</el-main>
</template>
<script>
import { mapGetters } from 'vuex';
import {
  LAYOUT_SIDER_COLLAPSED_WIDTH,
  LAYOUT_SIDER_WIDTH,
} from '@/settings/layoutSetting';

export default {

}
</script>
<style lang="scss" scoped>
.app-main{
  border:1px solid red;
}
</style>