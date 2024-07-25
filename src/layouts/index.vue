<template>
  <el-container style="height: 100vh">
    <layout-sider />
    <div>
      <layout-header />
      <div class="h-12"></div>
      <layout-main />
    </div>
  </el-container>
</template>
<script>
import LayoutSider from './sider/index.vue';
import LayoutMain from './main/index.vue';
import LayoutHeader from './header/index.vue';
export default {
  components: { LayoutSider, LayoutMain, LayoutHeader },
};
</script>
