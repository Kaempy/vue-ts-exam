import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@views/HomeView.vue";
import useGuard from "@src/composables/auth-guard";

const { authGuard } = useGuard();

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

// Use the authGuard function as a Vue Router beforeEach guard
router.beforeEach(async (to, from, next) => {
  // Check if the route requires authentication
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth) {
    // Route requires authentication, call the authGuard function
    await authGuard(to, from, next);
  } else {
    // Route does not require authentication, allow access to route
    next();
  }
});

export default router;
