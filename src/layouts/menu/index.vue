<template>
  <el-menu>
    <menu-item
      v-for="(item, index) in menus"
      :key="index"
      :data-source="item"
    ></menu-item>
  </el-menu>
</template>

<script>
import menus from '@/mock/menus';
import MenuItem from './MenuItem.vue';

export default {
  components: {
    MenuItem,
  },
  data() {
    return {menus};
  },
  computed: {

  },
};
</script>
