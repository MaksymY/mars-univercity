import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Authentification from "../views/authentication/index.vue";
import Map from "../views/map/index.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Authentification",
		component: Authentification,
	},
	{
		path: "/map",
		name: "Map",
		component: Map,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
