import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Homepage.vue";
import FilterView from "@/components/ProductFilterView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products-filter/:productsCategory",
    name: "FilterView",
    component: FilterView,
    params: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;