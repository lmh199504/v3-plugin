import type { VertifyCodeParams } from '@/types/api/user';
import request from '@/utils/request';

/**
 * 获取验证码
 */
export const reqVertifyCode = (data: VertifyCodeParams) => {
	return request({
		url: '/account/send_code',
		method: 'POST',
		data,
	});
};
