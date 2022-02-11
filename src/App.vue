<template>
  <div>
    <h1>Counter: {{$store.state.counter}}</h1>
    <h1>doubleCounter: {{doubleCounter}}</h1>
    <button @click="addCounter">+</button>
    <button @click="$store.state.counter--">-</button>

    <button @click="addCounterPayLoad">payload:5</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import store from "./store";

export default defineComponent({
  computed: {
    ...mapGetters(["doubleCounter"]),
  },
  methods: {
    addCounter() {
      store.commit("addCounter");
    },
    addCounterPayLoad() {
      store.commit("addCounterPayLoad", { value: 5 });
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
