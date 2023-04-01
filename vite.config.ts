import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        // additionalData: '@import "./src/assets/style/global.less";',
      },
    },
  },
  plugins: [ 
    vue(), 
    vueJsx(),
    createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],  // 指定需要缓存的图标文件夹
    symbolId: 'icon-[dir]-[name]'// 指定symbolId格式
  })
],
server:{
  proxy:{
    '/api':{
      target: 'https://api.imooc-lego.com/',
      changeOrigin:true,
      rewrite:path=>path.replace(/^\/path/,'') 
    }
  }
}
})
