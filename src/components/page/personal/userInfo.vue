<!-- 首页列表 -->
<template>
    <main class>
        <div class="infosbox">
            <div class="newsview">
                <h3 class="news_title">个人资料</h3>
                <div class="avatar">
                    <img src="/static/img/4.9755999.jpg">
                    <p>
                        <a href="/">修改头像</a>
                    </p>
                </div>
                <div style="margin-left:130px">
                    <div class="bloginfo">
                        <ul>
                            <li class="author">关注：0</li>
                            <li class="author">粉丝：0</li>
                            <li class="lmname">
                                <a href="/">学无止境</a>
                            </li>
                            <li class="timer">时间：2018-5-13</li>
                            <!-- <li class="view">4567人已阅读</li> -->
                        </ul>
                    </div>
                    <div class="tags">
                        <a href="/" target="_blank">个人博客</a> &nbsp;
                        <a href="/" target="_blank">小世界</a>
                    </div>
                    <div class="userList">
                        <p>
                            昵称：Anliny
                            <a href="/" style="float:right">修改资料></a>
                        </p>
                        <p>实名：不填写</p>
                        <p>性别：男</p>
                        <p>生日：1992-06-16</p>
                        <p>邮箱：294288551@qq.com</p>
                        <p>地区：中国 重庆 沙坪坝区</p>
                        <p>行业：互联网·电子商务</p>
                        <p>职位：前端</p>
                        <p>简介：敲着熟悉的代码，带领HTML5+CSS3 带你装</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
require('@/../static/css/info.css')
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
            this.$http.get('/common/article', { params: { id: this.id } }).then(res => {
                if (res.status == 200) {
                    this.articleInfo = res.data
                    console.log(this.articleInfo)
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.avatar {
    width: 100px;
    height: 120px;
    float: left;
    overflow: hidden;
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    p {
        text-align: center;
        height: 30px;
        // cursor: pointer;
        // color: #dedede;
        // &:hover {
        //     color: #000;
        // }
    }
}
.userList {
    p {
        line-height: 30px;
    }
}
</style>
