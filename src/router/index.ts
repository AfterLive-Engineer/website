import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";

const DEFAULT_TITLE = 'AfterLive'

export const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = (to.meta.title as string) || DEFAULT_TITLE
})

export default router;