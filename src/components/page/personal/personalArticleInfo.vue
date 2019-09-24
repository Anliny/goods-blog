<!-- 首页列表 -->
<template>
    <main class>
        <div class="infosbox">
            <div class="newsview">
                <h3 class="news_title">
                    {{articleInfo.articleName}}
                    <Select v-model="articleInfo.release" style="width:100px;float:right">
                        <Option
                            v-for="item in cityList"
                            :value="item.value"
                            :key="item.value"
                        >{{ item.label }}</Option>
                    </Select>
                </h3>
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
                <div class="news_con" v-html="articleInfo.articleContent"></div>
                <div style="display: flex;justify-content: center;">
                    <Button style="float:right">预 览</Button>&nbsp;&nbsp;
                    <Button type="primary" @click="handleSubmit">保 存</Button>&nbsp;&nbsp;
                    <Button type="primary" @click="handleEdit">编 辑</Button>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
require('@/../static/css/info.css')
import { userArtileInfo } from './mock.js'
import { apiGetArticleInfo, apiPutArtileRelease } from '@/api/article.js'
import { formateDateFn } from '@/utils/tools.js'
export default {
    data() {
        return {
            articleInfo: userArtileInfo,
            cityList: [
                {
                    value: 1,
                    label: '发布'
                },
                {
                    value: 2,
                    label: '暂存'
                },
                {
                    value: 3,
                    label: '下架'
                }
            ]
        }
    },
    props: {
        id: String
    },
    created() {
        console.log(this.id)
        this.getArtileInfo()
    },
    methods: {
        getArtileInfo() {
            apiGetArticleInfo({ id: this.id }).then(res => {
                console.log(res)
                this.articleInfo = res.data
            })
        },
        formateDateFn(time) {
            return formateDateFn(time)
        },
        handleSubmit() {
            let data = {
                id: this.articleInfo._id,
                release: this.articleInfo.release
            }
            apiPutArtileRelease(data).then(res => {
                this.$Message.success(res.data.message)
            })
        },
        handleEdit() {
            this.$router.push({ path: `/personal/blogging`, query: { id: this.id } })
        }
    }
}
</script>
<style scoped>
</style>