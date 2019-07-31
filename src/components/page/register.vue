<!-- 首页列表 -->
<template>
    <div class="wrapper">
        <article>
            <div class="infosbox">
                <div class="newsview">
                    <Form
                        ref="formValidate"
                        :model="formValidate"
                        :rules="ruleValidate"
                        :label-width="150"
                    >
                        <Row :gutter="16">
                            <Col span="26">
                                <h3 class="news_title">用户注册信息</h3>
                            </Col>
                            <Col span="16">
                                <FormItem prop="username" label="用户姓名：">
                                    <Input
                                        type="text"
                                        v-model="formValidate.username"
                                        placeholder="请输入用户姓名"
                                    ></Input>
                                </FormItem>
                            </Col>
                            <Col span="16">
                                <FormItem prop="password" label="用户密码：">
                                    <Input
                                        type="password"
                                        v-model="formValidate.password"
                                        placeholder="请输入用户密码"
                                    ></Input>
                                </FormItem>
                            </Col>
                            <Col span="16">
                                <FormItem prop="repassword" label="确认密码：">
                                    <Input
                                        type="password"
                                        v-model="formValidate.repassword"
                                        placeholder="请输入确认密码"
                                    ></Input>
                                </FormItem>
                            </Col>
                            <Col span="16">
                                <FormItem prop="email" label="用户邮箱：">
                                    <Input
                                        type="email"
                                        v-model="formValidate.email"
                                        placeholder="请输入用户邮箱"
                                    ></Input>
                                </FormItem>
                            </Col>
                            <Col span="16">
                                <div class="loginBtn">
                                    <Button @click="$router.back(-1)">取消</Button>&nbsp;&nbsp;&nbsp;
                                    <Button type="primary" @click="handleRegister">登录</Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
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
</style>