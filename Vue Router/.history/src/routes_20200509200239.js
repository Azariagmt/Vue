import User from "./components/user/User.vue";
import Home from "./components/Home.vue";
import Make from "./components/mak"
export const routes = [
  { path: "/user", component: User },
  { path: "", component: Home },
  {path: "/makeb", component: Make}
];
