<template>
    <div class="singer">
        <scroll :list="singerList" :top="83" ref="scroll">
            <div class="scroll-wrapper">
                <!-- 歌手分类 -->
                <singer-category
                    :singer-category="singerCategory"
                    @category-click="fetchSingerList"
                />

                <!-- 歌手列表 -->
                <singer-list
                    :list="singerList"
                />
            </div>
        </scroll>
    </div>
</template>

<script>
import SingerCategory from '@/components/main/singer/SingerCategory'
import SingerList from '@/components/main/singer/SingerList'
import Scroll from '@/components/common/Scroll'

export default {
    data() {
        return {
            singerCategory: {},
            singerList: []
        }
    },
    methods: {
        //获取歌手分类
        async fetchSingerCategory() {
            const { data: { data: category } } = await this.$http.get('/singer/category');
            this.singerCategory = {
                sex: category.sex,
                area: category.area,
                genre: category.genre
            }
        },
        //获取歌手列表
        async fetchSingerList(params) {
            this.singerList = []
            const res = await this.$http.get('/singer/list', { params })
            this.singerList = res.data.data.list
        }
    },
    created() {
        this.fetchSingerCategory()
        this.fetchSingerList()
    },
    components: {
        SingerCategory,
        SingerList,
        Scroll
    },
    watch: {
        singerCategory() {
            this.$nextTick(() => {
                this.$refs.scroll.refresh()
            })
        }
    }
}
</script>