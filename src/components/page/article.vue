<!-- 首页列表 -->
<template>
    <main class>
        <div class="infosbox">
            <div class="newsview">
                <h3 class="news_title">{{articleInfo.articleName}}</h3>
                <div class="bloginfo">
                    <ul>
                        <li class="author">
                            作者：
                            <a href="/">{{articleInfo.articleAuthor}}</a>
                        </li>
                        <li class="lmname">
                            <a href="/">学无止境</a>
                        </li>
                        <li class="timer">时间：{{formateDateFn(articleInfo.updateTime)}}</li>
                        <li class="view">4567人已阅读</li>
                    </ul>
                </div>
                <div class="tags">
                    <a
                        href="/"
                        target="_blank"
                        v-for="(item,index) in articleInfo.flag"
                    >{{item.labelName}}</a>
                </div>
                <div class="news_about">
                    <strong>简介</strong>
                    {{articleInfo.articleDescribe}}
                </div>
                <div class="news_con">{{articleInfo.articleContent}}</div>
            </div>
        </div>
    </main>
</template>

<script>
require('@/../static/css/info.css')
import { apiGetArticleInfo } from '@/api/common.js'
import { formateDateFn } from '@/utils/tools.js'
export default {
    data() {
        return {
            articleInfo: {}
        }
    },
    props: {
        id: String
    },
    created() {
        console.log(this.id)
        this.getArticle()
    },
    methods: {
        getArticle() {
            apiGetArticleInfo({ id: this.id }).then(res => {
                this.articleInfo = res.data
            })
        },
        formateDateFn(time) {
            return formateDateFn(time)
        }
    }
}
</script>
<style scoped>
</style>