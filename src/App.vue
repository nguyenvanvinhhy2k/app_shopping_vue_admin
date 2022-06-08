<template>
  <div id="app">
    <div id="wrapper">
      <Header />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <SideBar />
          <router-view />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./share/Header.vue";
import Header from "./share/SideBar.vue";
import Footer from "./share/Footer.vue";

export default {
  name: "App",
  components: {
    SideBar,
    Header,
    Footer,
  },
  computed: {},
};
</script>

<style>

</style>
