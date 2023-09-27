import { createWebHistory, createRouter } from "vue-router";
import windy from "@/views/WindyView.vue";
const routes = [
  {
    path: "/",
    redirect: "/windy",
  },
  {
    path: "/windy",
    name: "windy",
    component: windy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
