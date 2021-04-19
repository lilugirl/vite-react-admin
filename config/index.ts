export default {
    development:{
        cdn:'./',
        apiBaseUrl:'/api'  // 开发环境接口请求，后用于proxy代理配置
    },
    beta:{
        cdn:'//s.xxx.com/vite-react-app/beta' , //测试环境cdn路径
        apiBaseUrl:'//www.beta.xxx.com/v1' // 测试环境接口地址
    },
    release:{
        cdn:'//s.xxx.com/vite-react-app/release', // 正式环境cdn路径
        apiBaseUrl:'//www.xxx.com/v1' // 正式环境接口地址
    }
}