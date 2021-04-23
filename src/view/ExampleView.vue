<template>
  <div>
    <button @click="clickTest">click</button><br /><br />
    <button @click="debounceTest">debounce click</button><br /><br />
    <button @click="throttleTest">throttle click</button>
  </div>
</template>

<script>
// import { debounce } from "vue-debounce";
import _ from "lodash";

export default {
  methods: {
    clickTest() {
      console.log("clicked");
    },
    debounceTest: _.debounce(function() {
      console.log("debounce");
    }, 10000),
    throttleTest: _.throttle(function() {
      console.log("throttle");
    }, 10000),
  },
};
</script>

<style></style>
