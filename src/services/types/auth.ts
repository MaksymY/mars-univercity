export interface SingIn {
	email: string;
	password: string;
}

export interface UserInfo {
	success?: boolean;
	message?: string;
	userData?: {
		userID?: string;
		firstName?: string;
		lastName?: string;
		email?: string;
		token?: string;
		role?: string;
	};
}
