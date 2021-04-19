import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
import fs from 'fs'
import lessToJS from 'less-vars-to-js'

const themeVariables=lessToJS(
  fs.readFileSync(path.resolve(__dirname,'./config/variables.less'),'utf-8')
)

// https://vitejs.dev/config/
export default defineConfig({
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
  }
})
