<template>
    <div class="block">
        <el-timeline>
            <el-timeline-item timestamp="2020-10 " placement="top">
                <el-card>
                    <el-link href="https://colorhunt.co/palettes/popular" target="_blank">
                        <h3>更新 Github 模板</h3></el-link>
                    <p>Popular Schemes for Designers and Artists
                        A curated collection of the most popular and trendy color palettes. Get the perfect color ideas
                        for your design or art project.</p>
                    <b>提交于 2018/4/3 20:46</b>
                </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020-9" placement="top">
                <el-card shadow="hover">
                    <el-link href="http://mangoya.cn/#/" target="_blank">
                        <h3>Write the Code. Change the World.</h3>
                    </el-link>
                    <p>Popular Schemes for Designers and Artists
                        A curated collection of the most popular and trendy color palettes. Get the perfect color ideas
                        for your design or art project.</p>
                    <b>提交于 2018/4/3 20:46</b>
                </el-card>
            </el-timeline-item>
            <el-timeline-item :timestamp="time | formatTime" placement="top">
                <el-card>
                    <el-link href="https://github.com/Aimee1608/myblogvue" target="_blank">
                        <h3>Aimee1608 / myblogvue</h3>
                    </el-link>
                    <p>Popular Schemes for Designers and Artists
                        A curated collection of the most popular and trendy color palettes. Get the perfect color ideas
                        for your design or art project.</p>
                    <b>提交于 2018/4/3 20:46</b>
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
                time: ""
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
</style>