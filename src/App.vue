<template>
  <div id="app">
    <div
      data-v-56d83c02=""
      id="mainLayout"
      class="wrap"
      watchmallno="1"
      ppupmallno="1"
    >
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style></style>
