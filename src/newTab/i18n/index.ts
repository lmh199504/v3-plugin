import { createI18n } from 'vue-i18n';

import zh_cn from './locales/zh_cn';

import en_us from './locales/en_us';

const messages = {
	zh: zh_cn,
	en: en_us,
};

const language = (navigator.language || 'zh').toLocaleLowerCase();
console.log(messages);
const i18n = createI18n({
	legacy: false,
	locale: localStorage.getItem('lang') || language.split('-')[0] || 'zh',
	fallbackLocale: 'zh',
	messages,
});

export default i18n;
