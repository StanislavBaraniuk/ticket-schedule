import Vue from "vue";
import Router from "vue-router";

import Home from './views/Home.vue'
import Login from './views/Login'
import Tools from './views/Tools'
import Account from './views/Account'
import NotFound from './views/404'

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/tools",
            name: "Tools",
            component: Tools
        },
        {
            path: "/account",
            name: "Account",
            component: Account
        },
        {
            path: "*",
            name: "NotFound",
            component: NotFound
        }
    ]
});