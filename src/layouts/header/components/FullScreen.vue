<template>
  <el-tooltip :content="content" placement="bottom">
    <span class="text-[18px]">
      <img :src="icon" @click="toggle">
    </span>
  </el-tooltip>
</template>

<script>
import { useFullscreen } from '@vueuse/core';
import FullScreen from '@/images/icons/fullscreen.svg'
import FullScreenExit from '@/images/icons/fullscreen-exit.svg'

const { toggle, isFullscreen } = useFullscreen();
console.log(useFullscreen())

export default {
  data() {
    return { isFullscreen };
  },
  computed: {
    content() {
      console.log(isFullscreen)
      return isFullscreen.value ? '退出全屏' : '全屏';
    },
    icon(){
      return isFullscreen.value ? FullScreenExit : FullScreen
    }
  },
  methods: {
    toggle,
  },
};
</script>
