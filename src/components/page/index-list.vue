<!-- 首页列表 -->
<template>
    <main class="r_box">
        <li
            v-for="(item) in doneTodosCount.articles"
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
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            dataList: this.$store.getters.doneTodosCount
        }
    },
    computed: {
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters(['doneTodosCount'])
    },
    created() {
        this.handleMenu()
    },
    methods: {
        ...mapActions({
            handleMenu: 'handleMenu'
        }),

        handleArticle(id) {
            this.$router.push({ path: `/article`, query: { id: id } })
        }
    }
}
</script>
<style scoped>
</style>