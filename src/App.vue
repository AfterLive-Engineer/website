<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>
<template>
  <Header />
  <main class="min-h-[80vh]">
    <router-view></router-view>
  </main>
  <Footer />
</template>