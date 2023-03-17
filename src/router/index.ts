import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@views/HomeView.vue";
import store from "@src/store/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "HomePage",
    component: HomeView,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: () => import("@views/AboutView.vue"),
  },
  {
    path: "/shop",
    name: "ShopPage",
    component: () => import("@src/views/Shop/productsList.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/shop/:productId",
    name: "ProductPage",
    component: () => import("@src/views/Shop/productId.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: () => import("@views/ContactView.vue"),
  },
  {
    path: "/auth/login",
    name: "LoginPage",
    component: () => import("@src/views/auth/loginView.vue"),
  },
  {
    path: "/auth/signup",
    name: "SignupPage",
    component: () => import("@src/views/auth/signupView.vue"),
  },
  {
    path: "/404",
    name: "PageNotFound",
    component: () => import("@components/Error/PageNotFound.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth/login");
  } else {
    next();
  }
});

export default router;
