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
            name: 'Vue3LoaderImage',
            fileName: 'vue3-loader-image'
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