<template>
    <div class="content-aside">
         <span class="edit">
             <el-link :underline="false" href="/edit" style="color: #ffffff" :disabled=!isEdit>
             <el-button type="primary" icon="el-icon-edit" :disabled=!isEdit>
                 写博客
             </el-button>
             </el-link>
         </span>
        <el-menu
                default-active="1"
                class="el-menu-vertical" v-show=isEdit>
            <el-submenu v-for="(value, key, index) in articles" :key="key" :index="index.toString()">
                <template slot="title">
                    <img src="../assets/logo.png" alt="" class="img-ico">
                    <span>{{key}}</span>
                </template>
                <el-menu-item v-for="(item,i) in value" :index="index.toString()+'-'+i.toString()" :key="item.title"
                              @click="handle(item)" class="item-title">{{item.title}}
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>


</template>

<script>
    export default {
        name: "Aside",
        data() {
            return {
                isEdit: this.$store.state.isEdit,
                articles: {}
            }
        },
        created() {
            this.$http.get("/vue/art_index", {
                params: {
                    uid: this.$store.state.uid
                }
            }).then((respon => {
                this.articles = respon.data

            })).catch(reason => this.$message.error("网络错误"))
        },
        methods: {
            handle(object) {
                this.$router.push({
                    path: "/display",
                    query: {
                        object: object
                    }
                });
            }
        }
    }
</script>

<style lang="scss">
    .img-ico {
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
        vertical-align: middle;
    }

    .item-title {
        text-align: left;
        width: 249px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .edit {
        display: inline-block;
        text-align: center;
        margin: 20px 0;
    }
</style>