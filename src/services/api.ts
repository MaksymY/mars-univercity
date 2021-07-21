import ky from "ky";
import { UserInfo } from "@/services/types/auth";

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
