<template>
  <div>
    {{ m1() }}
    <Comp1 :key1="key1" />
    <button @click="add">sss</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect, PropType, Ref } from "vue";
import { onMounted, watch, ref, computed, toRefs, toRef } from "vue";
import Comp1 from "../components/Comp1.vue";

interface User {
  name: string;
}
function useUserRepositories(user: Ref<string>) {
  const res = {
    repositories: ref([] as User[]),
    async getUserRepositories() {
      res.repositories.value = []; // await fetchUserRepositories(user.value)
    },
  };
  watch(user, res.getUserRepositories);
  onMounted(res.getUserRepositories);

  return res;
}

function useRepositoryNameSearch(repositories: Ref<User[]>) {
  const res = {
    searchQuery: ref(""),
    repositoriesMatchingSearchQuery: computed(() => {
      return repositories.value.filter((repository) => {
        const b = repository.name.includes(res.searchQuery.value);
        return b;
      });
    }),
  };

  return res;
}

export default defineComponent({
  name: "CompositionApi",
  components: { Comp1 },
  emits: {
    onClose(e: MouseEvent) {},
    onOpen(user: User) {},
  },
  setup(props, ctx) {
    // this.a.a = 3;
    const { c } = toRefs(props);
    const a = toRef(props, "a");
    c.value = "";
    ctx.emit("onClose", "ds")
    ctx.emit("onOpen")
    return {
      s1: 3,
      sf1() {
        return 3;
      },
    };
  },
  data() {
    return {
      key1: 3,
    };
  },
  props: {
    a: {} as PropType<{ a: number; b: string }>,
    b: String as PropType<"11" | "cc">,
    bb: String as PropType<"11" | "cc">,
    c: {
      type: String,
      required: true,
      default: (p: any) => 232, // 这是一个错误
    },
    cc: () => (undefined as unknown) as 1 | 2 | 3,
  },
  computed: {
    aa() {
      // return this.b;
    },
  },
  methods: {
    m1() {
      this.s1 = 3;
      // this.c = "ds"
      // this.b.toString()
    },
    add() {
      this.key1 += 1;
      this.s1 += 1;
      console.log(this.s1);
    },
    propA: (p?: number | null) => {},
  },
});
</script>

<style lang="scss" scoped>
p {
  padding: 10px;
}
</style>