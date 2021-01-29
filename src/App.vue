<template>
    <el-container class="page">
        <!--  导航菜单和轮播图  -->
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <Cards></Cards>
        </el-main>

        <!--  中间分割线 -->
        <el-divider><i class="el-icon-coffee"></i></el-divider>

        <el-container>
            <!--  侧边  -->
            <div class="aside">
                <Aside></Aside>
            </div>

            <el-container>
                <!--  中心内容区域 -->
                <el-main class="main">
                    <router-view></router-view>
                </el-main>
            </el-container>

        </el-container>
        <!--  底部区域  -->
        <el-footer>
            <router-view name="footer"></router-view>

        </el-footer>
    </el-container>
</template>

<script>
    import Header from './components/Header'
    import Cards from "./components/Cards";
    import Aside from "./components/Aside";

    export default {
        components: {
            Header,
            Cards,
            Aside,
        }
    }
</script>

<style lang="scss">
    .page {
        margin: 0 10px;

        .el-footer, .el-main, .aside {
            margin: 10px;
        }
    }

    .el-footer {
        height: 100px;
        background-color: #2b2e4a;
    }


    .aside {
        width: 250px;

        .edit {
            display: block;
            text-align: center;
            margin: 20px 0;
        }
    }

    .main {
        background-color: #ffffff;

        .markdown-body {
            height: 100%;
        }
    }
</style>
