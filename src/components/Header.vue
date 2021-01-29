<template>

    <el-menu :default-active="$route.path" class="blog-menu" mode="horizontal"
             :router="true"
             background-color="#fff"
             text-color="#3e4149"
             active-text-color="#409EFF">
        <el-menu-item index="/">
            <el-link :underline="false" href="/">
                <img src="../assets/logo.png" alt="图片Logo" width="26" style="padding-bottom: 5px">&nbsp;
                访博
            </el-link>
        </el-menu-item>

        <el-menu-item index="/csdn" router>
            <el-link :underline="false" href="https://blog.csdn.net/qq_44091773" target="_blank">CSDN 博客</el-link>
        </el-menu-item>

        <el-menu-item index="/price" router>
            <el-link :underline="false" href="/price">赞赏</el-link>
        </el-menu-item>


        <el-menu-item index="/words">
            <el-link :underline="false" href="/words">留言板</el-link>
        </el-menu-item>

        <el-menu-item index="/about">
            <el-link :underline="false" href="/about">关于疫情</el-link>
        </el-menu-item>

        <el-menu-item>
            <div style="width: 500px;">
                <el-input placeholder="请输入内容" v-model="input" clearable>
                    <el-button slot="append" @click="searchBybaidu">百度搜搜</el-button>
                </el-input>
            </div>
        </el-menu-item>

        <el-menu-item index="/login" class="login" v-show="this.userInfo.isButton">
            <el-button type="primary" @click="loginFormVis = true">登 录</el-button>

            <el-dialog
                    title="登 录"
                    :visible.sync="loginFormVis"
                    width="30%">
                <el-form :model="loginForm" :rules="lrules" ref="ruleForm" label-width="50px"
                         :hide-required-asterisk=true
                         :status-icon=true
                         class="user-form">
                    <el-form-item label="账号" prop="name">
                        <el-input v-model="loginForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="passward">
                        <el-input v-model="loginForm.passward" show-password></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="resetForm('ruleForm')">重 置</el-button>
                    <el-button type="primary" @click="login">登 录</el-button>
                </span>
            </el-dialog>
        </el-menu-item>


        <el-menu-item index="/ " v-show="this.userInfo.isButton">
            <el-button @click="loginRegistVis = true">注 册</el-button>

            <el-dialog
                    title="注 册"
                    :visible.sync="loginRegistVis"
                    width="30%">
                <el-form :model="registerForm" status-icon :rules="rrules" ref="registerRule"
                         label-width="70px"
                         label-position="left"
                         class="registerForm">
                    <el-form-item label="账号" prop="username">
                        <el-input v-model.number="registerForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="passward">
                        <el-input type="passward" v-model="registerForm.passward" autocomplete="off"
                                  show-password></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="repwd">
                        <el-input type="passward" v-model="registerForm.repwd" autocomplete="off"
                                  show-password></el-input>
                    </el-form-item>

                </el-form>
                <span slot="footer" class="dialog-footer">
                        <el-button @click="resetForm('registerRule')">重 置</el-button>
                        <el-button type="primary" @click="register">注 册</el-button>
                    </span>
            </el-dialog>
        </el-menu-item>

        <el-menu-item index="/people" v-show="this.userInfo.isUser">
            <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    {{this.userInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        <i class="el-icon-user"></i>
                        <span>个人中心</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <i class="el-icon-setting"></i>
                        <span>设置</span>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <i class="el-icon-switch-button"></i>
                        <span @click="layOut">退出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu-item>

    </el-menu>


</template>

<script>
    var user = JSON.parse(window.localStorage.getItem("userInfo"));
    if (user == null) {
        user = {
            uid: "null",
            username: "null",
            isButton: true,
            isUser: false,
            isEdit: false,
        }
    }
    export default {
        name: "Header",
        data() {
            var validatePass = (rule, value, callback) => { // 确认密码
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerForm.passward) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                input: "", // 搜索框

                loginFormVis: false, // 是否显示登录表单
                loginForm: {  // 登录信息
                    name: "",
                    passward: ""
                },
                lrules: { // 登录表单规则
                    name: [{required: true, message: '请输入账号', trigger: 'blur'},
                        {min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur'}],
                    passward: [{required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 3, message: '密码最少3位', trigger: 'blur'}]
                },

                loginRegistVis: false, // 是否显示注册表单
                registerForm: { // 注册数据
                    username: "",
                    passward: "",
                    repwd: ""
                },
                rrules: { // 注册表单规则
                    username: [{required: true, message: '请输入账号', trigger: 'blur'},
                        {min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur'}],
                    passward: [{required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 3, message: '密码最少3位', trigger: 'blur'}],
                    repwd: [
                        {validator: validatePass, trigger: 'blur'}],
                },
                userInfo: {
                    uid: user.uid,
                    username: user.username,
                    isButton: user.isButton,
                    isUser: user.isUser,
                    isEdit: user.isEdit
                }

            };
        },
        methods: {

            // 头部搜索框，啥都不会，百度一下
            searchBybaidu() {
                let baseUrl = "https://www.baidu.com/s?ie=utf-8&wd="
                let url = baseUrl + this.input
                window.open(url)
            },
            // 清空表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            // 登录
            login() {
                if (this.loginForm.name.length <= 0 || this.loginForm.name.length > 11
                    || this.loginForm.passward.length < 3) {
                    this.$message.error("登录信息不符合要求，请重新填写！");
                    return false;
                }
                this.$http.get('/vue/login', {
                    params: {
                        name: this.loginForm.name,
                        pwd: this.loginForm.passward
                    }
                }).then(respon => {
                    console.log(respon)
                    if (respon.data.message == "error") {
                        this.$message.error("账号或密码错误！");
                        return false
                    } else {
                        let data = respon.data.data;
                        var storage = window.localStorage;
                        this.$store.state.uid = data.uid
                        this.userInfo.uid = data.uid
                        this.userInfo.username = data.username;
                        this.userInfo.isButton = false
                        this.userInfo.isUser = true
                        this.userInfo.isEdit = false
                        storage.setItem("userInfo", JSON.stringify(this.userInfo))
                        this.$message({
                            message: '登录成功！',
                            type: 'success'
                        });
                        setTimeout(() => {
                            window.location.reload()
                            return true
                        }, 1000)

                    }
                }).catch(error => {
                    console.error(error)
                    this.$message.error("网络错误！");
                })
            },
            // 注册
            register() {
                if (this.registerForm.username.length <= 0 || this.registerForm.username.length > 11
                    || this.registerForm.passward.length < 3) {
                    this.$message.error("注册信息不符合要求，请重新填写！");
                    return false;
                }

                this.$http.get("/vue/regist", {
                    params: {
                        name: this.registerForm.username,
                        pwd: this.registerForm.passward
                    }
                }).then(respon => {
                    if (respon.data == 1) {
                        this.$message({
                            message: '注册成功，3秒后将跳转登录页面！',
                            type: 'success'
                        });
                        setTimeout(() => {
                            this.loginRegistVis = false;
                            this.loginFormVis = true;
                        }, 3000)

                    } else {
                        this.$message.error('用户已经存在');
                        return false;
                    }
                }).catch(reason => {
                    this.$message.error('网络错误');
                })
            },

            // 退出
            layOut() {
                var storage = window.localStorage;
                this.userInfo.username = "null"
                this.userInfo.uid = "null"
                this.userInfo.isButton = true
                this.userInfo.isUser = false
                this.userInfo.isEdit = true
                storage.setItem("userInfo", JSON.stringify(this.userInfo))
                window.location.reload()
            }
        },

    }
</script>

<style scoped>
    .el-menu-item {
        text-align: center;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #2b2e4a;
        font-size: 20px;
        font-family: 华文黑体;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }

    .el-menu {
        margin: 0 100px
    }


</style>