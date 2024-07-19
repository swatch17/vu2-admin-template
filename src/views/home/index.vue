<template>
  <div>
    <h3>Hello This is Home Page</h3>
    <button @click="add">Click</button>
    <div>{{ count }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions ,mapMutations} from 'vuex';

export default {
  name: 'Home',
  data() {
    return {};
  },
  mounted() {
    console.log(this)
    console.log(this.$store.getters)
  },
  computed: {
    ...mapGetters('counter',['count'])
  },
  methods: {
    ...mapMutations('counter',['increment']),
    add() {
      this.increment()
    },
  },
};
</script>
