<script lang="ts" setup>
    import ThemeSwitcher from './ThemeSwitcher.vue';
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';

    let page = ref(0);

    const route = useRoute();
    const path = route.path;

    // ページ判定
    if (path === '/' || path === '/top') {
        page.value = 0;
    } else if (path === '/talent') {
        page.value = 1;
    } else if (path === '/audition') {
        page.value = 2;
    } else if (path === '/more') {
        page.value = 3;
    }
    
    console.log(path, page.value);
</script>
<template>
    <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
    <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
      <div class="flex items-center justify-between">
        <router-link to="/">
          <a class="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
            <img class="w-10 h-auto" width="100" height="100" src="/icon.jpg" alt="AfterLive Logo" />
            AfterLive
          </a>
        </router-link>
        <div class="sm:hidden">
          <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-image-and-text-1" aria-controls="navbar-image-and-text-1" aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
            <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
      </div>
      <div id="navbar-image-and-text-1" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
          <router-link to="/">
            <a v-if="page==0" class="font-medium text-pink-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-current="page">TOP</a>
            <a v-else class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-current="page">TOP</a>
          </router-link>
          <router-link to="/talent">
            <a v-if="page==1" class="font-medium text-pink-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-current="page">TALENT</a>
            <a v-else class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">TALENT</a>
          </router-link>
          <router-link to="/audition">
            <a v-if="page==2" class="font-medium text-pink-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-current="page">AUDITION</a>
            <a v-else class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">AUDITION</a>
          </router-link>
          <router-link to="/more">
            <a v-if="page==3" class="font-medium text-pink-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" aria-current="page">MORE</a>
            <a v-else class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">MORE</a>
          </router-link>
          <!-- Dark mode toggle -->
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  </header>
</template>