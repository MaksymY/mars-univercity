import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Authentification from "../views/authentication/Index.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Authentification",
		component: Authentification,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
