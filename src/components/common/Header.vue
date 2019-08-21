<template>
    <header class="header-navigation" id="header">
        <nav>
            <div class="logo">
                <a href="/">XXX个人博客</a>
            </div>
            <h2 id="mnavh">
                <span class="navicon"></span>
            </h2>
            <ul id="starlist" style="float:left;">
                <li v-for="item,index in menu" :key="index">
                    <router-link to="/">{{item.courseName}}</router-link>
                </li>
            </ul>

            <div v-if="username" style="float:right;cursor: pointer;">
                <span @click="handleLogin">你好！{{username}}</span>,
                <router-link to="/personal">个人中心</router-link>&nbsp;&nbsp;&nbsp;
                <span @click="handleLogout">退出</span>
            </div>
            <div v-else style="float:right;cursor: pointer;">
                <span @click="handleLogin">登录</span>|
                <router-link to="/register">注册</router-link>
            </div>
            <Modal v-model="isShowModal" title="用户登录" closable footer-hide :mask-closable="false">
                <Form ref="loginForm" :model="loginForm" :rules="ruleValidate" :label-width="120">
                    <FormItem label="用户姓名：" prop="username">
                        <Input v-model="loginForm.username" placeholder="请输入用户姓名"></Input>
                    </FormItem>
                    <FormItem label="用户密码：" prop="password">
                        <Input v-model="loginForm.password" type="password" placeholder="请输入用户密码"></Input>
                    </FormItem>
                    <div class="loginBtn">
                        <Button @click="handleCancel">取消</Button>&nbsp;&nbsp;&nbsp;
                        <Button type="primary" @click="handleSave">登录</Button>
                    </div>
                </Form>
            </Modal>
        </nav>
    </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        //  const vm = this;
        // 自定义验证 判断上传文件 fileList 的长度, 这样就和普通输入框表现一致了
        // const validateIDCardFront = (rule, value, callback) => {
        //     if (this.imgCard.managerIDCardFront.length === 0) {
        //         callback(new Error("请上传身份证人像面"));
        //     } else {
        //         callback();
        //     }
        // };
        return {
            menu: [],
            isShowModal: false,
            username: window.localStorage.getItem('userName'),
            isLogin: true,
            loginForm: {
                username: '',
                password: ''
            },
            ruleValidate: {
                username: [{ required: true, message: '请输入用户姓名', trigger: 'blur' }],
                password: [
                    { required: true, message: '请输入用户密码', trigger: 'blur' }
                    // {
                    //     required: true,
                    //     trigger: 'blur',
                    //     validator: function(rule, value, callback) {
                    //         if (value != vm.formItem.pwd) {
                    //             return callback(new Error())
                    //         } else {
                    //             callback()
                    //         }
                    //     }
                    // }
                ]
            }
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
    },
    methods: {
        handleLogin() {
            this.isShowModal = true
        },
        handleSave() {
            this.$refs['loginForm'].validate(valid => {
                if (valid) {
                    this.$http.post('/api/auth', this.loginForm).then(res => {
                        console.log(res.data)
                        if (res.data.status == '1') {
                            window.localStorage.setItem('token', res.data.token)
                            window.localStorage.setItem('userInfo', JSON.stringify(res.data))
                            window.localStorage.setItem('userName', res.data.username)
                            this.username = res.data.username
                            this.$store.commit('set_token', res.data.token), this.$store.commit('userInfo', res.data), this.$Message.success('登录成功！')
                            this.isShowModal = false
                        } else {
                            this.$Message.error(res.data.mess)
                        }
                    })
                }
            })
        },
        handleCancel() {
            this.$refs['loginForm'].resetFields()
            this.$Message.error('您已取消登录！')
            this.isShowModal = false
        },
        handleLogout() {
            window.localStorage.clear()
            this.username = ''
            this.$Message.success('退出成功！')
            this.$router.push('/')
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
</style>

