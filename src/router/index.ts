import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Authentification from "@/views/authentication/index.vue";
import Dashboard from "@/views/dashboard/index.vue";
import Map from "../views/map/index.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Authentification",
		component: Authentification,
	},
	{
		path: "/dashboard/:roomId",
		name: "Dashboard",
		component: Dashboard,
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
