import { createRouter, createWebHistory } from "vue-router";
import Movies from "../pages/Movies.vue";
import MovieDetail from "../pages/MovieDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Movies",
      component: Movies,
    },
    {
      path: "/movie",
      name: "MovieDetail",
      component: MovieDetail,
    },
  ],
});

export default router;
