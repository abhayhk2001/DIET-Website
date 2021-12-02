import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/class",
    name: "Class",
    component: () => import("../views/Class.vue"),
  },
  {
    path: "/:class/:SUB/:chap/:COMP",
    name: "ChapterPage",
    component: () => import("../views/ChapterPage.vue"),
  },
  {
    //remove this later
    path: "/subject",
    name: "subject",
    component: () => import("../views/subject.vue"),
  },
  {
    path: "/:class/:SUB/",
    name: "Subject Page",
    component: () => import("../views/subject.vue"),
  },
    
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
