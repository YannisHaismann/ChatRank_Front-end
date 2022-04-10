import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import DashboardHome from "../views/dashboard/Home.vue";
import DashboardStatistics from "../views/dashboard/Statistics.vue";
import DashboardBot from "../views/dashboard/Bot.vue";
import DashboardMyAccount from "../views/dashboard/MyAccount.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ProfileStreamer from "../views/ProfileStreamer.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Profile/:nameStreamer",
    name: "ProfileStreamer",
    component: ProfileStreamer,
  },
  {
    path: "/login/:justRegistered?",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard/home",
    name: "DashboardHome",
    component: DashboardHome,
  },
  {
    path: "/dashboard/statistics",
    name: "DashboardStatistics",
    component: DashboardStatistics,
  },
  {
    path: "/dashboard/bot",
    name: "DashboardBot",
    component: DashboardBot,
  },
  {
    path: "/dashboard/myaccount",
    name: "DashboardMyAccount",
    component: DashboardMyAccount,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
