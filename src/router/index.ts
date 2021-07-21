import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Authentification from "../views/authentication/Index.vue";
import Dashboard from "../views/dashboard/Index.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Authentification",
		component: Authentification,
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: Dashboard,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
