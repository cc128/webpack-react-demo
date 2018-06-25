import axios from '../api/index.js'
// 站点信息
export const querySiteName = (data) => {
    return axios.post(`/org/query_site_name`, data)
        .then(res => {
            if (res.status === 200) {
                return res.data
            }
        })
}
// 登录
export const user_login = (data) => {
    return axios.post(`/user/user_login`, data)
        .then(res => {
            if (res.status === 200) {
                return res.data
            }
        })
}
// 菜单信息
export const query_page_method = (data) => {
    return axios.post(`/user/query_page_method`, data)
        .then(res => {
            if (res.status === 200) {
                return res.data
            }
        })
}
// 头条
// export const list = (data) => {
//     return axios.get(`/get_as_cp`, data)
//         .then(res => {
//             if (res.status === 200) {
//                 return res.data
//             }
//         })
// }
// 头条
export const list = (data) => {
    return axios.get(`/list/`, data)
        .then(res => {
            if (res.status === 200) {
                return res.data
            }
        })
}