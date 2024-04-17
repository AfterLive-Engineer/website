import { createRouter, createWebHistory } from "vue-router";
import Index from "../pages/Index.vue";
import Audition from "../pages/Audition.vue";

const DEFAULT_TITLE = 'AfterLive'

export const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/audition",
    name: "Audition",
    component: Audition,
    meta: {
      title: 'Audition | AfterLive'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = (to.meta.title as string) || DEFAULT_TITLE
})

export default router;