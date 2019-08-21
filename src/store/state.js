const state = {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    userInfo: localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : '',
}
export default state