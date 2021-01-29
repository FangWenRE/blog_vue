<template>
    <div class="blog-content-box">
        <h1 class="blog-title">{{obj.title}}</h1>
        <div class="blog-info">
            <div class="article-item"><i class="el-icon-user"></i> <span class="text"> Admin </span></div>
            <div class="article-item"><i class="el-icon-time"></i> <span class="text"> {{obj.e_time}} </span></div>
            <div class="article-item"><i class="el-icon-price-tag"></i> <span class="text"> {{obj.classify}}</span>
            </div>
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
                obj: this.$route.query.object
            }
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
        margin-left: 400px;
    }

</style>