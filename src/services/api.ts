import ky from "ky";
import { UserInfo } from "@/services/types/auth";
import { User } from "@/services/types/user";

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
				// Cookies.set("authToken", data.userData.token);
				return data;
			});
		});
}

export function getRoomUsers(room_id: string): Promise<any> {
	return api.post(`sensor/getAllUserRoomWatchData`, { json: { room_id } }).then(dataHandler);
}

export function getRoomSensorsData(room_node_id: string): Promise<any> {
	return api.post(`sensor/getRoomData`, { json: { room_node_id } }).then(dataHandler);
}

export function getRoomDetails(roomId: string): Promise<any> {
	return api.get(`room/getRoomDetails/${roomId}`).then(dataHandler);
}

export function updateRoomCapacity(id: string, capacity: string): Promise<any> {
	return api.post(`room/updateRoomCapacity`, { json: { id, capacity } }).then(dataHandler);
}

export function updateRoomLocked(id: string): Promise<any> {
	return api.get(`room/updateRoomLocked/${id}`).then(dataHandler);
}
