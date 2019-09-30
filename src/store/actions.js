import { apiPostBlogArticleList } from '@/api/common.js'
const actions = {
    handleMenu (context, payload) {
        apiPostBlogArticleList({ id: payload }).then(res => {
            context.commit('blogMenuArticle', res.data);
        })
    }
}

export default actions;