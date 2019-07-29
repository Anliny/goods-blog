<!-- 首页列表 -->
<template>
    <main class="r_box">
        <li v-for="(item) in dataList" :key="item._id" @click="handleArticle(item._id)">
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
export default {
    data() {
        return {
            dataList: []
        }
    },
    created() {
        this.$http.get('/common').then(res => {
            if (res.status == 200) {
                this.dataList = res.data.articles
            }
        })
    },
    methods: {
        handleArticle(id) {
            this.$router.push({ path: `/article`, query: { id: id } })
        }
    }
}
</script>
<style scoped>
</style>