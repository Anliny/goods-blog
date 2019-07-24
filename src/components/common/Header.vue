<template>
    <header class="header-navigation" id="header">
        <nav>
            <div class="logo">
                <a href="/">代丰个人博客</a>
            </div>
            <h2 id="mnavh">
                <span class="navicon"></span>
            </h2>
            <ul id="starlist">
                <li v-for="item,index in menu" :key="index">
                    <router-link to="/">{{item.courseName}}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            menu: []
        }
    },
    created() {
        this.$http.get('/common/blogs').then(res => {
            console.log(res)
            if (res.status == 200) {
                console.log(res.data.message.blogs)
                this.menu = res.data.message.blogs
            }
        })
    }
}
</script>

<style scoped >
</style>
