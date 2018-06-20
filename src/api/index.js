//引入axios
import axios from 'axios';
import { notification } from 'antd';
// 请求的默认地址
// axios.defaults.baseURL = "http://10.163.126.142:8080/user";

// axios.defaults.baseURL = "http://192.168.1.16:8080/user"; //田
// axios.defaults.baseURL = "http://192.168.1.15:8080/user"; //王
// axios.defaults.baseURL = "http://192.168.1.17:8080/user"; //曾
axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL = "https://m.toutiao.com";

// 请求超时时间限制
axios.defaults.timeout = 5000;
import qs from 'qs'
//POST传参序列化(添加请求拦截器)
let DATA = ''
let loginfoData = ''

axios.interceptors.request.use((config) => {
    // axios.defaults.headers.common['X-CSRFToken'] = 'xxxxxxxx'
    // config.method === 'post'
    //在发送请求之前做某件事

    if (config.url != '/org/query_site_name' && !DATA) {
        DATA = JSON.parse(localStorage.getItem('loginfo'))
    }
    if (config.url == '/user/user_login') {
        config.data.siteHierarchy = DATA.hierarchy
    } else if (config.url != '/org/query_site_name') {
        loginfoData = JSON.parse(localStorage.getItem('loginfoData'))
        config.data.token = loginfoData.token
    }
    config.data = qs.stringify(config.data)
    return config;
}, (error) => {
    return Promise.reject(error);
});


axios.interceptors.response.use(function (res) {
    //在这里对返回的数据进行处理
    if (res.config.url.includes("/org/query_site_name") && res.data.code === 0) {
        localStorage.setItem('loginfo', JSON.stringify(res.data.data))
    }
    if (res.data.code === 0) {
        if (res.data.msg !== '成功') {
            notification.success({ message: '成功', description: res.data.msg })
        }
    } else if (res.data.code == 502) {
        notification.warning({ message: '警告', description: res.data.msg })
        this.props.history.push("/")
    } else {
        notification.warning({ message: '警告', description: res.data.msg })
    }
    return res;
}, function (err) {
    return Promise.reject(err);
})
export default axios