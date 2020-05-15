import User from "./components/user/User.vue";
import Home from "./components/Home.vue";
import Make from "./components/user/makeBelieve.vue";
import Another from "./components/user/Another.vue";

export const routes = [
  { path: "/user/:id", component: User },
  {path:"user/12"}
  { path: "", component: Home },
  {path: "/umake", component: Make},
  {
    path: "/another",
    component: Another
  }
];
