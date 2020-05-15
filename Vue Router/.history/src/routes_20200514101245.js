import User from "./components/user/User.vue";
import Home from "./components/Home.vue";
import Make from "./components/user/makeBelieve.vue";
import Another from "./";

export const routes = [
  { path: "/user", component: User },
  { path: "", component: Home },
  {path: "/make", component: Make},
  {
    path: "/another",
    component: Another
  }
];
