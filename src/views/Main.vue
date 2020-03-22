<template>
    <div class="main">
        <!-- main-header -->
        <main-header
            title='Function Music'
            @nav-click="toPath"
        />

        <!-- 子路由（推荐 歌手 排行 搜索） -->
        <router-view></router-view>
    </div>
</template>

<script>
import MainHeader from '@/components/main/MainHeader'

export default {
    methods: {
        //路由跳转
        toPath(path) {
            this.$router.push(path);
        }
    },
    components: {
        MainHeader
    }
}
</script>