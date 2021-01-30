<template>
    <div class="blog-content-box">
        <h1 class="blog-title">{{obj.title}}</h1>
        <div class="blog-info">
            <div class="article-item"><i class="el-icon-user"></i> <span
                    class="text"> {{this.$store.state.username}}</span></div>
            <div class="article-item"><i class="el-icon-time"></i> <span class="text"> {{obj.e_time}} </span></div>
            <div class="article-item"><i class="el-icon-price-tag"></i> <span class="text"> {{obj.classify}}</span>
            </div>
            <span class="operate">
                        <el-link type="primary" @click="update(obj)" :disabled=!isEdit>编辑</el-link>
                         <el-popconfirm
                                 icon="el-icon-info"
                                 icon-color="red"
                                 title="确定删除这条博客吗？"
                                 @confirm="del(obj)" :disabled=!isEdit>
                        <el-link type="danger" slot="reference" :disabled=!isEdit>删除</el-link>
                    </el-popconfirm>
                    </span>
        </div>
        <div class="blog-context markdown-body" v-html="obj.html">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Article",
        data() {
            return {
                obj: this.$route.query.object,
                isEdit: this.$store.state.isEdit
            }
        },
        methods: {
            del(object) {
                this.$http.get("/vue/delete", {
                    params: {
                        item_aid: object.aid
                    }
                }).then(respon => {
                    if (respon.data == 1) {
                        this.$message({
                            message: '删除成功！',
                            type: 'success'
                        });
                        setTimeout(() => {
                            this.$router.push("/")
                            window.location.reload()
                        }, 2000)
                    } else {
                        this.$message.info("删除失败！")
                    }
                }).catch((respon) => {
                    console.error(respon)
                    this.$message.error("网络错误！")
                })
            },
            update(object) {
                this.$router.push({
                    path: "/edit",
                    query: {
                        object,
                        edit: true
                    }
                });
            },
        },
        watch: {
            $route: function (newVal, oldVal) {
                this.obj = newVal.query.object
                console.log(this.obj)
            }
        }
    }
</script>

<style lang="scss">
    .blog-content-box {
        width: 100%;
    }

    .blog-title {
        text-align: center;
        color: #2b2e4a;
        font-size: 25px;
    }

    .article-item {
        display: inline-block;
        margin: 0 10px;

        i {
            font-size: 20px;
        }

        .text {
            color: #9b9b9b;
            margin: 0 3px;
            font-size: 14px;
        }
    }

    .blog-info {
        margin: 20px 0;
        margin-left: 400px;

        .operate {
            margin-left: 100px;

            .el-link {
                margin: 0 20px;
            }
        }
    }

</style>