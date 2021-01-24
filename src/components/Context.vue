<template>
    <div class="block">
        <el-timeline>
            <el-timeline-item :timestamp="time" placement="top">
                <el-card>
                    <el-link href="https://colorhunt.co/palettes/popular" target="_blank">
                        <h3>更新 Github 模板</h3></el-link>
                    <p>Popular Schemes for Designers and Artists
                        A curated collection of the most popular and trendy color palettes. Get the perfect color ideas
                        for your design or art project.</p>
                    <b>提交于 2018/4/3 20:46</b>
                </el-card>
            </el-timeline-item>
            <el-timeline-item :timestamp="time" placement="top">
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
            <el-timeline-item :timestamp="time" placement="top">
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

        <el-calendar v-model="time">
        </el-calendar>

    </div>
</template>

<script>
    export default {
        name: "Context",
        data() {
            return {
                time: new Date()
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