<!-- 首页列表 -->
<template>
    <main class>
        <div class="infosbox">
            <Form
                ref="formValidate"
                :model="formValidate"
                :rules="ruleValidate"
                :label-width="0"
                label-position="left"
            >
                <div class="newsview">
                    <div class="news_title articleTitle">
                        <FormItem prop="articleName">
                            <Input v-model="formValidate.articleName" placeholder="请输入博客名称"></Input>
                        </FormItem>
                    </div>
                    <div class="news_title articleItem">
                        <FormItem label="文章标签：" prop="articleName" :label-width="100">
                            <Select v-model="formValidate.flag" multiple>
                                <Option
                                    v-for="item in flagArray"
                                    :value="item._id"
                                    :key="item._id"
                                >{{ item.labelName }}</Option>
                            </Select>
                        </FormItem>
                    </div>
                    <div class="news_title articleItem">
                        <FormItem label="文章分类：" prop="blog" :label-width="100">
                            <Select v-model="formValidate.blog">
                                <Option
                                    v-for="item in blogList"
                                    :value="item._id"
                                    :key="item._id"
                                >{{ item.courseName }}</Option>
                            </Select>
                        </FormItem>
                    </div>
                    <div class="news_title articleItem">
                        <FormItem label="简介：" prop="articleDescribe" :label-width="100">
                            <Input
                                v-model="formValidate.articleDescribe"
                                type="textarea"
                                :autosize="{minRows: 2,maxRows: 5}"
                                placeholder="请输入文章简介"
                            ></Input>
                        </FormItem>
                    </div>
                    <quill-editor
                        v-model="formValidate.articleContent"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)"
                    ></quill-editor>
                    <div class="news_title articleItem childCenter">
                        <Button>取消</Button>&nbsp;&nbsp;
                        <Button type="primary" @click="handleSubmit">保存</Button>
                    </div>
                </div>
            </Form>
        </div>
    </main>
</template>

<script>
require('@/../static/css/info.css')
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import { apiGetBlogList, apiPostAddArticle } from '@/api/article.js'
import { apiGetFlagList } from '@/api/flag.js'

export default {
    components: {
        quillEditor
    },
    data() {
        return {
            articleInfo: {},
            formValidate: {
                articleName: '',
                articleDescribe: '',
                flag: [],
                blog: '',
                articleContent: ''
            },
            blogList: [],
            flagArray: [],
            editorOption: {},
            ruleValidate: {
                articleName: [{ required: true, message: '请输入文章标题', trigger: 'blur' }],
                flag: [{ required: true, message: '请选择文章标签', trigger: 'change' }],
                blog: [{ required: true, message: '请选择文章类型', trigger: 'change' }],
                articleDescribe: [{ required: true, message: '请输入文章简介', trigger: 'blur' }],
                articleContent: [{ required: true, message: '请输入文章内容', trigger: 'blur' }]
            }
        }
    },
    props: {
        id: String
    },
    created() {
        this.getArticle()
        this.getBlogList()
        this.getFlagList()
    },
    methods: {
        getArticle() {
            this.$http.get('/common/article', { params: { id: this.id } }).then(res => {
                if (res.status == 200) {
                    this.articleInfo = res.data
                    console.log(this.articleInfo)
                }
            })
        },
        // 获取文章分类
        getBlogList() {
            apiGetBlogList().then(res => {
                this.blogList = res.data.blogs
            })
        },
        //  获取文章标签
        getFlagList() {
            apiGetFlagList().then(res => {
                this.flagArray = res.data
            })
        },

        onEditorBlur(ev) {},
        onEditorFocus(ev) {},
        onEditorReady(ev) {},
        // 保存文章
        handleSubmit() {
            this.$refs.formValidate.validate(valid => {
                if (valid) {
                    let data = {
                        ...this.formValidate,
                        articleAuthor: JSON.parse(this.$store.state.userInfo).username
                    }
                    apiPostAddArticle(data).then(res => {
                        console.log(res)
                    })
                }
            })
        }
    }
}
</script>
<style>
.ql-toolbar.ql-snow {
    background-color: #efefef;
}
.articleTitle .ivu-input-large {
    font-size: 24px;
    font-weight: normal;
    padding: 20px 0;
    color: #333;
    text-indent: 10px;
}
.articleItem {
    padding: 0;
}
.childCenter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
}
</style>