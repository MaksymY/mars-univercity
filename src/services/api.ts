import ky from "ky";
import { UserInfo } from "@/services/types/auth";

import Cookies from "js-cookie";

const api = ky.create({
	prefixUrl: "https://api-mars-university.herokuapp.com/",
	timeout: 30000,
	credentials: "include",
	headers: {
		"Content-Type": "application/json",
	},
});

const dataHandler = (res: Response) => res.json();

export function LoginUser(email: string, password: string): Promise<UserInfo | void> {
	return api
		.post(`user/login`, {
			json: {
				email,
				password,
			},
		})
		.then((res) => {
			dataHandler(res).then((data) => {
				/* Cookies.set("authToken", data.userData.token); */
				return data;
			});
		});
}

export function getRooms(): Promise<any> {
	return api.get("room/getRooms").then(dataHandler);
}

export function getRoomDetails(roomId: string): Promise<any> {
	return api.get(`room/getRoomDetails/${roomId}`).then(dataHandler);
}
