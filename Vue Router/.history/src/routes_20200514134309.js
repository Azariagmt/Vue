import User from "./components/user/User.vue";
import Home from "./components/Home.vue";
import Make from "./components/user/makeBelieve.vue";
import Another from "./components/user/Another.vue";
import UserStart from "./components/user/UserStart.vue";
import UserDetail from "./components/user/"

export const routes = [
  { path: "/user", component: User, children: [path: "", component: UserStart] },
  { path: "/", component: Home },
  { path: "/umake", component: Make },
  {
    path: "/another",
    component: Another,
  },
];
