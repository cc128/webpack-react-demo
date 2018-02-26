//引入axios
import axios from 'axios';
import { notification } from 'antd';
// 请求的默认地址
// axios.defaults.baseURL = "http://192.168.1.101:8080/user";
axios.defaults.baseURL = "http://140.143.85.220:8080/user";

// 请求超时时间限制
axios.defaults.timeout = 5000;
import qs from 'qs'
//POST传参序列化(添加请求拦截器)
let DATA = ''
let loginfoData = ''

axios.interceptors.request.use((config) => {
    // config.method === 'post'
    //在发送请求之前做某件事
    if (config.url == '/org/query_site_name') {
        DATA = JSON.parse(sessionStorage.getItem('loginfo'))
    } else if (config.url == '/user/user_login') {
        config.data.siteHierarchy = DATA.hierarchy
    } else {
        loginfoData = JSON.parse(sessionStorage.getItem('loginfoData'))
        config.data.token = loginfoData.token
    }
    config.data = qs.stringify(config.data)
    return config;
}, (error) => {
    return Promise.reject(error);
});


axios.interceptors.response.use(function (res) {
    //在这里对返回的数据进行处理
    if (res.data.code == 0) {

    } else if (res.data.code == 502) {
        notification.warning({ message: '警告', description: res.data.msg })
        this.props.history.push("/")
    } else {
        notification.warning({ message: '警告', description: res.data.msg })
    }
    return res;
}, function (err) {
    //Do something with response error
    console.log(2, err)
    return Promise.reject(error);
})
export default axios