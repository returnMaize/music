<template>
    <div class="singer">
        <!-- 歌手分类 -->
        <singer-category
            :singer-category="singerCategory"
        />
    </div>
</template>

<script>
import SingerCategory from '@/components/main/singer/SingerCategory'

export default {
    data() {
        return {
            singerCategory: {}
        }
    },
    methods: {
        //获取歌手分类
        async fetchSingerCategory() {
            const { data: { data: category } } = await this.$http.get('/artist/category');
            this.singerCategory = {
                sex: category.sex,
                area: category.area,
                genre: category.genre
            }
        }
    },
    created() {
        this.fetchSingerCategory();
    },
    components: {
        SingerCategory
    }
}
</script>