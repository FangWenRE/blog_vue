<template>
    <el-carousel :interval="5000" type="card" height="250" trigger="click">
        <el-carousel-item v-for="item in imgSrc" :key="item">
            <img class="carousel-image" :src="item" alt="" width="100%">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name: "Carts",
        data() {
            return {
                imgSrc: [
                    require("../assets/carts/1.jpg"),
                    require("../assets/carts/2.jpg"),
                    require("../assets/carts/3.jpg"),
                    require("../assets/carts/4.jpg")
                ]

            }
        }
    }
</script>

<style lang="scss">
    .el-carousel {
        width: 1200px;
        margin: 0 auto;
    }

    .el-carousel-item {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .carousel-image {
            max-width: 100%;
            max-height: 100%;
        }
    }

    ul li button {
        background-color: #333333;
    }
</style>