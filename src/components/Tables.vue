<template>
    <div>
        <h2 class="time">数据更新时间：{{time}}</h2>
        <el-table
                v-loading="loading"
                :data="tableData"
                stripe
                height="500px"
                class="tables"
                :cell-style="{ textAlign: 'center' }"
                :header-cell-style="{textAlign: 'center'}">

            <el-table-column
                    type="index"
                    label="序号"
                    :index="indexMethod"
                    width="150">
            </el-table-column>

            <el-table-column
                    prop="provinceName"
                    label="省份"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="currentConfirmedCount"
                    label="当前确诊"
                    sortable
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="confirmedCount"
                    label="累计确诊"
                    sortable
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="curedCount"
                    label="累计治愈"
                    sortable
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="deadCount"
                    label="累计死亡"
                    sortable
                    width="150">
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    export default {
        name: "Tables",
        data() {
            return {
                tableData: [],
                time: "",
                loading: true
            }
        },
        created() {
            setTimeout(this.$http.get("https://www.tianqiapi.com/api?version=epidemic&appid=23035354&appsecret=8YvlPNrz")
                .then(result => {
                    this.tableData = result.data.data.area
                    if (this.tableData.length == 34)
                        this.loading = false
                    else {
                        this.$message({
                            message: '数据加载失败了偶！',
                            center: true,
                            type: 'error'
                        });
                    }
                    this.time = result.data.data.date

                }).catch(reason => {
                    this.$message({
                        message: '数据加载失败了偶！',
                        center: true,
                        type: 'error'
                    });
                }), 3000)
        },
        methods: {
            indexMethod(index) {
                return index + 1
            }
        }
    }
</script>

<style scoped>
    .tables {
        width: 900px;
        height: 500px;
        margin: 0 auto;
    }

    .time {
        text-align: center;
    }

    .table-expand {
        font-size: 0;
    }

    .table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }

</style>