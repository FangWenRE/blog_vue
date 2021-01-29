<template>
    <div class="block">
        <el-timeline>
            <el-timeline-item timestamp="2020-10 " placement="top">
                <el-card shadow="hover">
                    <el-link href="https://colorhunt.co/palettes/popular" target="_blank">
                        <h3>更新 Github 模板</h3></el-link>
                    <p>Popular Schemes for Designers and Artists
                        A curated collection of the most popular and trendy color palettes. Get the perfect color ideas
                        for your design or art project.</p>
                    <b>提交于 2018/4/3 20:46</b>
                    <span class="operate">
                        <el-link type="primary">编辑</el-link>|
                        <el-link type="danger">删除</el-link>
                    </span>

                </el-card>
            </el-timeline-item>
    </div>
</template>

<script>
    export default {
        name: "Context",
        data() {
            return {
                time: "",
                test: "132"
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
    b {
        color: #67C23A;
    }

    .el-calendar-table__row {
        height: 20px;
    }

    .operate {
        margin-left: 600px;

    }

    .el-link {
        margin: 0 10px;
    }
</style>