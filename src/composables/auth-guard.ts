import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import store from "@src/store/store";
import { User } from "firebase/auth";

export default function useGuard() {
  const authGuard = async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const currentUser: User | null = await store.dispatch(
      "auth/getCurrentUser"
    );

    if (!currentUser) {
      // User is not authenticated, redirect to login page
      next("/auth/login");
    } else {
      // User is authenticated, allow access to route
      next();
    }
  };
  return { authGuard };
}
