<template>
    <div class="recommend">
        <scroll :top="76" :list="hotSong" ref="scroll">
            <div class="scroll-wrapper">
                <!-- my-swiper -->
                <my-swiper
                    :swiper-list="swiperList"
                    :swiper-option="swiperOption"
                    @img-load="scrollRefresh"
                />

                <!-- song-sheet-list -->
                <song-sheet-list
                    :hot-song="hotSong"
                />
            </div>
        </scroll>
    </div>
</template>

<script>
import MySwiper from '@/components/main/recommend/MySwiper'
import SongSheetList from '@/components/main/recommend/SongSheetList'
import Scroll from '@/components/common/Scroll'

export default {
    data() {
        return {
            //my-swiper
            swiperList: [],
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true,
                autoplay: true
            },
            //song-sheet-list
            hotSong: []
        }
    },
    methods: {
        //滚动条刷新
        scrollRefresh() {
            this.$refs.scroll.refresh();
        },
        //获取轮播图数据
        async fetchSwiperList() {
            const res = await this.$http.get('/banner');
            this.swiperList = res.data.data.map(item => ({img: item.pic_info.url}))
        },
        //获取歌单列表数据（热门歌曲）
        async fetchHotSong() {
            const res = await this.$http.get('/recommend/playlist');
            this.hotSong = res.data.data.list.map(item => ({
                id: item.tid,
                img: item.cover_url_small,
                title: item.title,
                info: item.creator_info.nick
            }))
        }
    },
    created() {
        // this.fetchSwiperList();
        this.fetchHotSong();
    },
    components: {
        MySwiper,
        SongSheetList,
        Scroll
    }
}
</script>
