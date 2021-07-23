import ky from "ky";
import { UserInfo } from "@/services/types/auth";
import { User } from "@/services/types/user";

const api = ky.create({
	prefixUrl: "https://api-mars-university.herokuapp.com/",
	timeout: 30000,
	headers: {
		"Content-Type": "application/json",
	},
});

const dataHandler = (res: Response) => res.json().then((r) => r.data);

export function LoginUser(email: string, password: string): Promise<UserInfo> {
	return api
		.post(`user/login`, {
			json: {
				email,
				password,
			},
		})
		.then(dataHandler);
}

export function getRoomUsers(room_id: string): Promise<User[]> {
	return api.get(`sensor/getAllUserRoomWatchData`, { json: { room_id } }).then(dataHandler);
}
