<template>

    <el-menu :default-active="$route.path" class="blog-menu" mode="horizontal" @select="handleSelect"
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

        <el-submenu index="2">
            <template slot="title">文章分类</template>
            <el-menu-item index="/category/study">
                <el-link :underline="false" href="/category/study">学习笔记</el-link>
            </el-menu-item>
            <el-menu-item index="/category/vue">
                <el-link :underline="false" href="/category/vue">Vue</el-link>
            </el-menu-item>
            <el-menu-item index="/category/springboot">
                <el-link :underline="false" href="/category/springboot">springBoot</el-link>
            </el-menu-item>
        </el-submenu>

        <el-menu-item index="/price" router>
            <el-link :underline="false" href="/price">赞赏</el-link>
        </el-menu-item>


        <el-menu-item index="/words">
            <el-link :underline="false" href="/words">留言板</el-link>
        </el-menu-item>

        <el-menu-item index="/about">
            <el-link :underline="false" href="/about">关于</el-link>
        </el-menu-item>

        <el-menu-item>
            <div style="width: 500px;">
                <el-input placeholder="请输入内容" v-model="input" clearable>
                    <el-button slot="append">搜索</el-button>
                </el-input>
            </div>
        </el-menu-item>

        <el-menu-item index="/login" class="login" v-show="isButton">
            <el-button type="primary">登录</el-button>
        </el-menu-item>
        <el-menu-item index="/register" v-show="isButton">
            <el-button>注册</el-button>
        </el-menu-item>

        <el-menu-item index="/people" v-show="isUser">
            <el-dropdown>
                  <span class="el-dropdown-link">
                    {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-menu-item>

    </el-menu>


</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                input: "",
                username: "方二伟",
                isButton: true,
                isUser: false,


            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key)
            }
        }
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
        font-family: 迷你简雪君;
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }

</style>