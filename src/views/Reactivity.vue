<template>
  <div>{{ watchEffect1() }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect } from "vue";

export default defineComponent({
  name: "Reactivity",
  provide() {},
  data() {
    return {
      dataA: 3,
    };
  },
  watch: {
    'dataA': "t1"
  },
  // inject: ["injectA1"],
  methods: {
    t1() {
      this.$router;
      const count = ref(1);
      const plusOne = computed(() => count.value + 1);
      plusOne.effect;

      console.log(plusOne.value); // 2

      // return plusOne.value++; // error
    },
    watchEffect1() {
      const count = ref(0);

      const stop1 = watchEffect((ef) => {
        ef(() => console.log(count.value, "cb")); // change or stop, 就会执行
        console.log(count.value, "w"); // 第一次，或发生 change 就会执行
      });
      // log: 0 w

      setTimeout(() => count.value++, 1100); // log: 1 cb; 1 w
      setTimeout(() => count.value++, 3100); // log: 2 cb; 2 w
      setTimeout(stop1, 5100); // log: 2 cb
    },
  },
});
</script>

<style lang="scss" scoped>
p {
  padding: 10px;
}
</style>