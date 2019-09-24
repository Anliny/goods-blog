<!-- 用户文章列表 -->
<template>
    <main class="r_box">
        <li
            v-for="(item) in userArtileList"
            title="预览文章"
            :key="item._id"
            @click="handleArticle(item._id)"
        >
            <i>
                <a href="/">
                    <img :src="item.img">
                </a>
            </i>
            <h3>
                <a href="/">{{item.articleName}}</a>
            </h3>
            <p>{{item.articleDescribe}}</p>
        </li>
    </main>
</template>

<script>
import { userArtileList } from './mock.js'
import { apiGetArtileList } from '@/api/article.js'

export default {
    data() {
        return {
            userArtileList: userArtileList,
            username: JSON.parse(this.$store.state.userInfo).username
        }
    },
    created() {
        this.getUserArtileList()
    },
    methods: {
        // 获取当前角色 下的文章列表
        getUserArtileList() {
            let username = this.username
            apiGetArtileList({ username: username }).then(res => {
                console.log(res)
                this.userArtileList = res.data.articles
            })
        },

        // 跳转到文章详情
        handleArticle(id) {
            this.$router.push({ path: `/personal/myArtileInfo`, query: { id: id } })
        }
    }
}
</script>
<style scoped>
</style>