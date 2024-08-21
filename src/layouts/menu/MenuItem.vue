<template>
  <span>
    <template
      v-if="dataSource.children && dataSource.children.length > 0"
    >
      <el-submenu
        :key="dataSource.path"
        :index="dataSource.path"
        v-bind="$attrs"
      >
        <template v-if="dataSource.icon">
          <!-- <icon /> -->
        </template>
        <template slot="title">{{ dataSource.name }}</template>
        <span v-for="item in dataSource.children" :key="item.path">
          <el-menu-item :index="item.path" :route="item">
            <template v-if="item.icon">{{ item.icon }}</template>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </span>
      </el-submenu>
    </template>
    <template v-else>
      <el-menu-item :key="dataSource.path">
        <template v-if="dataSource.icon">
          {{ dataSource.icon }}
        </template>
        <span>{{ dataSource.name }}</span>
      </el-menu-item>
    </template>
  </span>
</template>
<script>
export default {
  props: {
    dataSource: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {},
};
</script>
