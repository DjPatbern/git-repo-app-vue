import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "./assets/main.css";
import Home from "@/Views/Home.vue";
import Search from "@/Views/Search.vue";
import Repos from "@/Views/Repos.vue";
import Repo from "@/Views/Repo.vue";
import NotFound from "@/Views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
    },
    {
      path: "/repos",
      name: "Repos",
      component: Repos,
    },
    {
      name: "Repo",
      path: "/repos/:repoId",
      component: Repo,
    },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
    { path: "/:catchAll(.*)", redirect: "/404" },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
