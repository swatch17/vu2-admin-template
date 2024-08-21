<template>
  <el-menu router class="h-full" :collapse="collapsed">
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
import { mapGetters } from 'vuex';

export default {
  components: {
    MenuItem,
  },
  data() {
    return { menus };
  },
  computed: {
    ...mapGetters('app', ['collapsed']),
  },
};
</script>
