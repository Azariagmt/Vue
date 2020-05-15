import User from "./components/user/User.vue";
import Home from "./components/Home.vue";
import Make from "./components/user/makeB"
export const routes = [
  { path: "/user", component: User },
  { path: "", component: Home },
  {path: "/makeb", component: Make}
];
