const mutations = {
    set_token (state, token) {
        state.token = token
    },
    del_token (state) {
        state.token = ''
        localStorage.clear();
    }
}
export default mutations