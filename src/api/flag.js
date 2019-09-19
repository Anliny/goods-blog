import axios from 'axios'

// 获取标签列表
export const apiGetFlagList = () => {
    return axios.request({
        url: "/flag",
        method: 'get'
    })
}