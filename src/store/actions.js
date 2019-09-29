import { apiGetBlogList } from '@/api/blog.js'
const actions = {
    getArticleList (blogId) {
        let data = {
            id: blogId
        }
        apiGetBlogList(data).then(res => {
            console.log(res);
        })
    }
}
export default actions