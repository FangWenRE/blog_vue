<template>
    <el-container class="page">
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <Cards></Cards>
        </el-main>
        <el-divider><i class="el-icon-coffee"></i></el-divider>
        <el-container>
            <div class="aside">
              <span class="edit">
                   <el-button type="primary" icon="el-icon-edit" circle></el-button>
                  写博客
              </span>
            <Aside></Aside>
        </div>
            <el-container>
                <el-main>
                    <Context></Context>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import Header from '../components/Header'
    import Cards from "../components/Cards";
    import Context from "../components/Context";
    import Aside from "../components/Aside";

    export default {
        name: "Page",
        components: {
            Header,
            Cards,
            Context,
            Aside
        }
    }
</script>

<style scoped>
    .page {
        margin: 0 100px;
        /*background-color: #878787;*/
    }

    .el-header, .aside, .el-main, .el-footer {

        margin: 10px;
    }

    .aside {
        width: 300px;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
</style>