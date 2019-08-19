<!-- 首页列表 -->
<template>
    <main class>
        <div class="infosbox">
            <div class="newsview">
                <h3 class="news_title">个人资料</h3>
                <div class="avatar">
                    <img :src="userInfo.avatar">
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
                        </ul>
                    </div>
                    <div class="tags">
                        <a href="/" target="_blank">个人博客</a> &nbsp;
                        <a href="/" target="_blank">小世界</a>
                    </div>
                    <div class="userList" v-if="isUpdate">
                        <p>
                            昵称：{{formValidate.username}}
                            <Button type="text" style="float:right" @click="isUpdate = false">
                                编辑资料
                                <Icon type="ios-arrow-forward"/>
                            </Button>
                        </p>
                        <p>实名：{{formValidate.realName}}</p>
                        <p>性别：{{formValidate.sex}}</p>
                        <p>生日：{{formateDateFn(formValidate.birthDaday)}}</p>
                        <p>邮箱：{{formValidate.email}}</p>
                        <p>地址：{{formValidate.address}}</p>
                        <p>行业：{{formValidate.industry}}</p>
                        <p>职位：{{formValidate.position}}</p>
                        <p>简介：{{formValidate.introduce}}</p>
                    </div>
                    <div class="userList" v-else style="margin-top:40px;">
                        <Form
                            ref="formValidate"
                            :model="formValidate"
                            :rules="ruleValidate"
                            :label-width="80"
                        >
                            <FormItem label="昵称：" prop="username" style="height:36px;">
                                <Input v-model="formValidate.username" placeholder="请输入昵称"></Input>
                            </FormItem>
                            <FormItem label="实名：" prop="realName">
                                <Input v-model="formValidate.realName" placeholder="请输入实际名称"></Input>
                            </FormItem>
                            <FormItem label="生日：" prop="birthDaday">
                                <Input v-model="formValidate.birthDaday" placeholder="请选择生日"></Input>
                            </FormItem>
                            <FormItem label="邮箱：" prop="email">
                                <Input v-model="formValidate.email" placeholder="请输入邮箱"></Input>
                            </FormItem>
                            <FormItem label="行业：" prop="industry">
                                <Input v-model="formValidate.industry" placeholder="请输入行业"></Input>
                            </FormItem>
                            <FormItem label="职位：" prop="position">
                                <Input v-model="formValidate.position" placeholder="请输入职位"></Input>
                            </FormItem>
                            <FormItem label="地址：" prop="address">
                                <Input v-model="formValidate.address" placeholder="请选择地址"></Input>
                            </FormItem>
                            <FormItem label="简介：" prop="introduce">
                                <Input
                                    v-model="formValidate.introduce"
                                    type="textarea"
                                    :autosize="{minRows: 2,maxRows: 5}"
                                    placeholder="Enter something..."
                                ></Input>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" @click="handleSubmit('formValidate')">保存</Button>
                                <Button
                                    @click="handleReset('formValidate')"
                                    style="margin-left: 8px"
                                >取消</Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
require('@/../static/css/info.css')
import { getUserInfo } from '@/api/user.js'
import { formateDateFn } from '@/utils/tools.js'
export default {
    data() {
        return {
            userInfo: {},
            isUpdate: true,
            formValidate: {
                realName: '',
                sex: '',
                birthDaday: '',
                address: '',
                industry: '',
                position: '',
                introduce: '',
                avatar: '',
                email: ''
            }
        }
    },
    props: {
        id: String
    },
    created() {
        this.getArticle()
    },
    methods: {
        getArticle() {
            getUserInfo().then(res => {
                console.log(res.data.docs)
                this.formValidate = res.data.docs
            })
        },
        // 格式化时间
        formateDateFn(data) {
            return formateDateFn(data)
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
