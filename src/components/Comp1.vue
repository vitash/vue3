<template>
  <div>{{ keySrc() }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watchEffect, PropType } from "vue";
import { provide, InjectionKey } from "vue";

const inK1: InjectionKey<string> = Symbol("sd")

export default defineComponent({
  name: "Comp1",
  props: {
    key1: { type: Number, required: true },
  },
  emits: {
    onClose(e: MouseEvent) {},
    onOpen(user: { name: string }) {},
  } as const,
  setup(p, ctx) {
    let a = ref(1);
    ctx.emit("onOpen", { name: "ds" });
    return {
      s1: 3,
      keySrc() {
        return p.key1 + " - " + p.key1;
      },
    };
  },
  computed: {
    aa() {
      // return this.b;
    },
    // keySrc1(){ return this.keySrc() }
  },
  mounted() {},
  methods: {
    m1() {},
  },
});
</script>

<style lang="scss" scoped>
p {
  padding: 10px;
}
</style>