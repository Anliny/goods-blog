const mutations = {
    set_token (state, token) {
        state.token = token
    },
    del_token (state) {
        state.token = ''
        localStorage.clear();
    },
    setUserInfo (state, userInfo) {
        state.userInfo = userInfo
    }
}
export default mutations