import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        // 주소에 api가 있으면 가로채기

        target: 'http://localhost:3000',
        // 진짜 주소

        changeOrigin: true,
        // 양쪽 다 똑같이 맞추기

        rewrite: (path) => path.replace(/^\/api/, ''),
        // 전달 하기전 api라는 글씨를 지우기
      },
    },
  },
})