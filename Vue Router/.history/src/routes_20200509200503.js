import User from "./components/user/User.vue";
import Home from "./components/Home.vue";
import Make from "./components/user/makeBelieve.vue"
export const routes = [
  { path: "/user", component: User },
  { path: "", component: Home },
  {path: "/make", component: Make}
];
