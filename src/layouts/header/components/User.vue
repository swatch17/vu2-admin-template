<template>
  <div>
    <el-dropdown @command="clickFn">
      <div>
        <i class="el-icon-user-solid text-base"></i>
        <span class="font-bold ml-1">用户名</span>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item in menus"
          :key="item.value"
          :command="item.value"
          @click=""
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { label: 'one', value: '1' },
        { label: 'two', value: '2' },
        { label: 'three', value: '3' },
      ],
    };
  },
  methods: {
    clickFn(command) {
      console.log(command);
    },
  },
};
</script>
