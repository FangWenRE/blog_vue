<template>
    <div class="block">
        <el-timeline>
            <el-timeline-item v-for="(item,index) in array" placement="top" :timestamp="item.e_time" :key="item.title">
                <el-card shadow="hover">
                    <el-link @click="handle(item)" target="_blank">
                        <h3>{{item.title}}</h3>
                    </el-link>
                    <p class="bloc-about">{{item.about}}</p>
                    <b class="bloc-time">创建于 {{item.c_time}}</b>
                    <span class="operate">
                        <el-link type="primary" @click="update(item)" :disabled=!isEdit>编辑</el-link>|
                         <el-popconfirm
                                 icon="el-icon-info"
                                 icon-color="red"
                                 title="确定删除这条博客吗？"
                                 @confirm="del(item,index)" :disabled=!isEdit>
                        <el-link type="danger" slot="reference" :disabled=!isEdit>删除</el-link>
                    </el-popconfirm>
                    </span>

                </el-card>
            </el-timeline-item>

        </el-timeline>
    </div>
</template>

<script>
    export default {
        name: "Context",
        data() {
            return {
                array: [],
                isEdit: this.$store.state.isEdit
            }
        },
        created() {
            this.$http.get("/vue/top_article", {
                params: {
                    uid: this.$store.state.uid,
                    param: "e_time",
                    limit: 5
                }
            }).then(respon => {
                let array = respon.data
                array.sort((a, b) => {
                    return a.e_time > b.e_time
                })
                console.log(array)
                this.array = array
            }).catch(respon => {
                console.error(respon)
            })
        },
        methods: {
            del(item, index) {
                this.array.splice(index, 1);
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
            handle(object) {
                this.$router.push({
                    path: "/display",
                    query: {
                        object: object,
                    }
                });
            }
        },
        filters: {
            formatTime(time) {
                var date = new Date();

                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();

                var hour = date.getHours();
                var minute = date.getMinutes();

                var t = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day) + " " + (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute);
                return t

            }
        }
    }
</script>

<style scoped>
    .bloc-time {
        color: #67C23A;
    }

    .bloc-about {
        color: rgba(46, 50, 80, 0.78);
        font-size: 16px;
        width: 950px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .operate {
        margin-left: 600px;

    }

    .operate .el-link {
        margin: 0 10px;
    }
</style>