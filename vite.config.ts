import vue from '@vitejs/plugin-vue'
import { serveDir, fsPlugin } from '@vitejs/fs-server'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    fsPlugin({
      '/@data': serveDir('examples'),
    })
  ],
})
