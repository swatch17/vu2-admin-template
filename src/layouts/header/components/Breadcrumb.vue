<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import router from '@/router'

export default {
  data(){
    return {

    }
  },
  computed: {

  },
  mounted(){
    this.getRouter()
  },
  methods: {
    getRouter(){
      console.log(router)
    }
  }
}
</script>