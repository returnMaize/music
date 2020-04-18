<template>
    <div class="main-header">
        <div class="title text-primary text-lg text-weight-7 text-center pt-2">
            {{ title }}
        </div>

        <div class="nav-list">
            <ul class="d-flex jc-around py-3 text-md text-gray2">
                <li
                    v-for="item of navList"
                    :key="item.name"
                    :class="{ 'nav-active': isActive(item.path) }"
                    @click="navClick(item.path)"
                >
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Function Music'
        }
    },
    data() {
        return {
            navList: [
                { path: '/recommend', name: '推荐' },
                { path: '/singer', name: '歌手' },
                { path: '/rank', name: '排行' },
                { path: '/search', name: '搜索' },
            ]
        }
    },
    methods: {
        //导航被点击了
        navClick(path) {
            this.$emit('nav-click', path);
        },
        //是否为活动导航
        isActive(path) {
            if (path === this.$route.path) {
                return true;
            }
            if (path === '/recommend' && this.$route.path === '/') {
                return true
            }
            return false;
        }
    }
}
</script>