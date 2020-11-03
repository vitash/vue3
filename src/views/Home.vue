<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>{{ this.$st.toFixed(2) }}</p>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :key="`sd`" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  provide() {

  },
  data() {
    return {
      dataA: 3
    }
  },
  // inject: ["injectA1"],
  methods: {
    f1() {
      this.$st.toFixed(2)
    }
  },
  render() {
    // this.injectA1
    console.log(this.$st.toFixed(2))
  },
  mounted() {
    console.log("home");
    
  }
});
</script>
