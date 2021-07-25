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

export interface Rooms {
	success: boolean;
	roomMap: [
		{
			_id: string;
			label: string;
			node_id: string;
		},
	];
}
