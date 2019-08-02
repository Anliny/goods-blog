<!-- 首页列表 -->
<template>
    <div class="wrapper">
        <article>
            <aside class="l_box">
                <div class="fenlei">
                    <h2>个人中心</h2>
                    <ul>
                        <li>
                            <router-link to="/personal/userInfo">个人资料</router-link>
                        </li>
                        <li>
                            <router-link to="/personal/collection">我的收藏</router-link>
                        </li>
                        <li>
                            <router-link to="/personal/comcern">我的关注</router-link>
                        </li>
                        <li>
                            <router-link to="/personal/myBlog">我的博客</router-link>
                        </li>
                        <li>
                            <router-link to="/personal/blogging">编写博客</router-link>
                        </li>
                    </ul>
                </div>
            </aside>
            <router-view/>
        </article>
    </div>
</template>

<script>
require('@/../static/css/info.css')
export default {
    data() {
        return {
            formValidate: {
                password: '',
                username: '',
                repassword: '',
                email: ''
            },
            ruleValidate: {
                username: [{ required: true, message: '请输入用户姓名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入用户密码', trigger: 'blur' }],
                repassword: [{ required: true, message: '请输入确认密码', trigger: 'blur' }],
                email: [{ required: true, message: '请输入用户邮箱', trigger: 'blur' }]
            }
        }
    },
    methods: {
        handleRegister() {
            this.$refs.formValidate.validate(valid => {
                if (valid) {
                    this.$http.post('/api/user/register', this.formValidate).then(res => {
                        console.log(res.data)
                        if (res.data.code == '0') {
                            this.$Message.success('注册成功！')
                            this.$router.back(-1)
                        } else {
                            this.$Message.error(res.data.message)
                        }
                    })
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.loginBtn {
    display: flex;
    justify-content: center;
    align-items: center;
}
.newsview {
    padding-bottom: 20px;
}
.router-link-active {
    color: #000;
    font-weight: bolder;
}
</style>