// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatDate(timestamp: string): any {
	const date = new Date(timestamp);
	return Intl.DateTimeFormat("fr", {
		hour: "numeric",
		minute: "numeric",
	}).format(date);
}
