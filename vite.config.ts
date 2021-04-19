import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'

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
        javascriptEnabled:true
      }
    }
  }
})
