import { createApp } from 'vue';
import Content from './content.vue';
import '@/common/global.less';

// 创建id为CRX-container的div
const crxApp = document.createElement('div');
crxApp.id = 'CRX-container';
// 将刚创建的div插入body最后
document.body.appendChild(crxApp);

// 创建Vue APP
const app = createApp(Content);

// 将Vue APP插入刚创建的div
app.mount('#CRX-container');

// 向目标页面驻入js
try {
	const insertScript = document.createElement('script');
	insertScript.setAttribute('type', 'text/javascript');
	insertScript.src = window.chrome.runtime.getURL('insert.js');
	document.body.appendChild(insertScript);
} catch (err) {
	console.log(err);
}

const sider = document.querySelector('.ant-layout-sider') as HTMLDivElement;

if (sider) {
	sider.style.display = 'none';
}

const floatEl = document.querySelector(
	'.index-module__floatBanner__3Rzjk'
) as HTMLDivElement;
if (floatEl) {
	floatEl.style.display = 'none';
}

const HEADER_ID = document.querySelector('#HEADER_ID') as HTMLDivElement;
if (HEADER_ID) {
	HEADER_ID.style.display = 'none';
}
