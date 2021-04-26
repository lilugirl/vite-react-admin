import axios from 'axios'
import {message} from 'antd'
import {stringify} from 'qs'
import config from '../../config'

//const MODE=import.meta.env.MODE //环境变量

const axiosInstance = axios.create({
    timeout: 5000,
    withCredentials: true,
    responseType: 'json'
  });
  
  axiosInstance.interceptors.request.use((config)=>{

    config.headers['Authorization']='Bearer '+'abc';
    return config;
})

axiosInstance.interceptors.response.use((response)=>{
    if(response.status===200){
        return response.data;
    }
    // todo 数据相应拦截
    return response;
},(error)=>{
    console.log('拦截错误',error);
});

export default axiosInstance;