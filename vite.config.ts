import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from 'path'

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            name: 'Vue3ImageLoader',
            fileName: 'vue3-image-loader'
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue'
            }
          }
        }
      }
});