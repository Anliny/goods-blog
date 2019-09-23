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
export default {
    data() {
        return {
            userArtileList: userArtileList
        }
    },
    created() {},
    methods: {
        handleArticle(id) {
            this.$router.push({ path: `/personal/myArtileInfo`, query: { id: id } })
        }
    }
}
</script>
<style scoped>
</style>