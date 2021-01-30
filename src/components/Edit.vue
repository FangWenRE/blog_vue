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
                about: "文章简介:",
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
                classify: [],
                oldInfo: {},
                edit: false
            };
        },
        created() {
            let object = this.$route.query.object
            if (object != undefined) {
                this.title = object.title
                this.value = object.text
                this.about = object.about
                this.classify = object.classify.split(",")
                this.oldInfo = object
            }
            this.edit = this.$route.query.edit
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
            saveContext(value, render) {
                if (this.title.length <= 0) {
                    this.$message.error("标题未填写！");
                    return false
                } else if (this.classify.length <= 0) {
                    this.$message.error("分类未填写！");
                    return false
                }
                let e_time = this.dateFormat("YYYY-mm-dd HH:MM:SS", new Date())
                let classify = this.classify.join(",").toString()
                let c_time = e_time
                if (this.edit)
                    c_time = this.oldInfo.c_time

                this.$http.post("/vue/save", {
                    author: this.$store.state.uid,
                    title: this.title,
                    classify: classify,
                    c_time: c_time,
                    e_time: e_time,
                    about: this.about,
                    text: value,
                    html: render
                }).then(respon => {
                    if (respon.data == 1) {
                        this.$message.success("保存成功！")
                        setTimeout(() => {
                            this.$router.push("/")
                            window.location.reload()
                        }, 2000)
                    } else {
                        this.$message.error("保存失败！")
                        return false;
                    }
                }).catch(respon => {
                    this.$message.error("网络错误")
                })
            }
        }
    }
</script>

<style scoped>

</style>