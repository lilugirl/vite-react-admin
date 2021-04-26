import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'
import config from './config';

const env =process.argv[process.argv.length-1];
const base =config[env];

const themeVariables=lessToJS(
  fs.readFileSync(path.resolve(__dirname,'./config/variables.less'),'utf-8')
)

// https://vitejs.dev/config/
export default defineConfig({
  base:base.cdn,
  plugins: [
    reactRefresh(),
    // 按需引入antd样式
    vitePluginImp({
      libList:[
        {
          libName:'antd',
          style:(name)=>`antd/lib/${name}/style/index.less`
        }
      ]
    })
  ],
  css:{
    preprocessorOptions:{
      less:{
        // 支持内联Javascript
        javascriptEnabled:true,

        // 重写less变量，定制样式
        modifyVars:themeVariables
      }
    }
  },
  server:{
    port:3001,  //开发环境启动端口
    proxy:{
      // 当遇到 /api 路径时，将其转换成 target 的值，
      '/api':{
        target:'http://47.99.134.126:28019/api/v1',
        changeOrigin:true,
        rewrite:path=>path.replace(/^\/api/,'') // 将/api重写为空
      }
    }

  },
  resolve:{
    alias:{
      '~':path.resolve(__dirname,'./'),  //根路径
      '@':path.resolve(__dirname,'src')  // src路径
    }
  }
})
