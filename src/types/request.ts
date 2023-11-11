export type Method = 'GET' | 'POST';

export type ResponseType = 'JSON' | 'BLOB';

export interface Config<T = any> extends RequestInit {
	method: Method;
	url: string;
	data?: T;
	baseURL?: string;
	responseType?: ResponseType;
}
