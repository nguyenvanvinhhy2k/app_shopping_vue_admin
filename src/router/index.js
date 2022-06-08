import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Product from "../components/Product.vue";
import Category from "../components/Category.vue";
import Oder from "../components/Oder.vue";
import OderSuccess from "../components/OderSuccess.vue";
import OderCancel from "../components/OderCancel.vue";
import Login from "../components/Login.vue";
import User from "../components/User.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: "/login", name: Login, component: Login },
    { path: "/", name: Home, component: Home },
    { path: "/product", name: Product, component: Product },
    { path: "/category", name: Category, component: Category },
    { path: "/oder", name: Oder, component: Oder },
    { path: "/oder-success", name: OderSuccess, component: OderSuccess },
    { path: "/oder-cancel", name: OderCancel, component: OderCancel },
    { path: "/user", name: User, component: User },
  ],
});
