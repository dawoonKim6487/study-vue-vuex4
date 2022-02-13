<template>
  <div>{{userIdGetters}}</div>
  <ul>
    <li v-for="(board,index) in boardList" :key="index">{{board.tit}} - {{board.desc}}</li>
  </ul>
  <button @click="login">로그인</button>
  <button @click="boardUpdate">보드 업데이트</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import store from "./store";
export default defineComponent({
  computed: {
    ...mapGetters(["userIdGetters", "boardList"]),
  },
  methods: {
    login() {
      store.dispatch("login", { userName: "다운", userId: "다운1" });
    },
    boardUpdate() {
      store.dispatch("boardUpdate", { tit: "1", desc: "123" });
    },
  },
});
</script>
