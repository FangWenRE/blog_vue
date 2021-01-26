<template>
    <div>

        <el-input placeholder="文章标题" v-model="title">
            <template slot="prepend">文章标题</template>
        </el-input>

        <el-input
                type="textarea"
                :rows="2"
                placeholder="文章简介"
                v-model="about">
        </el-input>
        <el-select
                v-model="classify"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="请选择文章标签"
                style="width: 100%;">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <mavon-editor v-model="value"
                      @save="saveContext"
                      @change="changeContext"

        />
    </div>
</template>

<script>

    export default {
        name: "Edit",
        data() {
            return {
                defaultOpen: "preview",
                title: "",
                value: '',
                about: "",
                options: [{
                    value: 'HTML',
                    label: 'HTML'
                }, {
                    value: 'CSS',
                    label: 'CSS'
                }, {
                    value: 'JavaScript',
                    label: 'JavaScript'
                }],
                classify: []
            };
        },
        methods: {
            dateFormat(fmt, date) {
                let ret;
                const opt = {
                    "Y+": date.getFullYear().toString(),        // 年
                    "m+": (date.getMonth() + 1).toString(),     // 月
                    "d+": date.getDate().toString(),            // 日
                    "H+": date.getHours().toString(),           // 时
                    "M+": date.getMinutes().toString(),         // 分
                    "S+": date.getSeconds().toString()          // 秒
                    // 有其他格式化字符需求可以继续添加，必须转化成字符串
                };
                for (let k in opt) {
                    ret = new RegExp("(" + k + ")").exec(fmt);
                    if (ret) {
                        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
                    }
                }
                return fmt;
            },
            changeContext(value, render) {

            },
            saveContext(value, render) {
                if (this.title.length <= 0) {
                    this.$message.error("标题未填写！");
                    return false
                }
                let time = dateFormat("YYYY-mm-dd HH:MM:SS", new Date())
                this.$http.post("/vue/edit", {
                    title: this.title,
                    about: this.about,
                    author: this.$store.state.uid,
                    ctime: time,
                    etime: time,
                    text: value,
                    html: render
                })


                console.log()

            }
        }
    }
</script>

<style scoped>

</style>