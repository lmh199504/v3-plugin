import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { CRX_OUTDIR } from './globalConfig';
import externalGlobals from 'rollup-plugin-external-globals';

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		// 输出目录
		outDir: CRX_OUTDIR,
		rollupOptions: {
			input: {
				index: path.resolve(__dirname, './popup.html'),
				newTab: path.resolve(__dirname, './newTab.html'),
			},
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
			},
			external: ['vue', 'vue-i18n', 'vue-demi'],
			plugins: [
				externalGlobals({
					vue: 'Vue',
					'vue-i18n': 'VueI18n',
					'vue-demi': 'VueDemi',
				}),
			],
		},
	},
	server: {
		// 指定dev sever的端口号，默认为5173
		port: 3000,
		// 自动打开浏览器运行以下页面
		open: '/',
		// 设置反向代理
		proxy: {
			// 以下示例表示：请求URL中含有"/api"，则反向代理到http://localhost
			// 例如: http://localhost:3000/api/login -> http://localhost/api/login
			// 如果反向代理到localhost报错Error: connect ECONNREFUSED ::1:80，
			// 则将localhost改127.0.0.1
			'/api': {
				target: 'http://127.0.0.1/',
				changeOrigin: true,
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [
		vue(),
		createSvgIconsPlugin({
			// 指定需要缓存的图标文件夹
			iconDirs: [path.resolve(process.cwd(), 'src/icons')],
			// 指定symbolId格式
			symbolId: 'icon-[dir]-[name]',

			/**
			 * 自定义插入位置
			 * @default: body-last
			 */
			// inject?: 'body-last' | 'body-first'

			/**
			 * custom dom id
			 * @default: __svg__icons__dom__
			 */
			// customDomId: '__svg__icons__dom__',
		}),
	],
});
