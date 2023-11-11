import { Config } from '@/types/request';
const baseURL = 'https://izuiyou.com/planck/web';

export const obj2String = (
	obj: Record<string, any>,
	arr: [string, any][] = [],
	idx = 0
) => {
	for (const item in obj) {
		arr[idx++] = [item, obj[item]];
	}
	return new URLSearchParams(arr).toString();
};

function request<T = any, R = any>(config: Config<R>): Promise<T> {
	const initObj: RequestInit = {
		method: config.method,
		mode: 'no-cors',
	};

	let url = config.baseURL ? config.baseURL : baseURL + config.url;
	if (config.method == 'GET' && config.data) {
		const urlParams = obj2String(config.data);
		if (url.indexOf('?') > -1) {
			url += urlParams;
		} else {
			url += '?' + urlParams;
		}
	} else {
		if (config.data) {
			initObj.body = JSON.stringify(config.data);
		}
	}

	return new Promise((resolve, reject) => {
		fetch(url, initObj)
			.then(res => {
				if (res.ok) {
					if (config.responseType == 'JSON') {
						const result = res.json();
						resolve(result as T);
					} else if (config.responseType == 'BLOB') {
						const result = res.blob();
						resolve(result as T);
					}
				} else {
					reject('');
				}
			})
			.catch(error => {
				reject(error);
			});
	});
}

export default request;
