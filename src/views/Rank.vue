<template>
    <div class="rank">
        <scroll 
            :list="rankList" 
            :top="83"
        >
            <div class="scroll-wrapper" style="overflow: hidden">
                <div 
                    v-for="rank of rankList" 
                    :key="rank.topId" 
                    class="d-flex mx-4 my-3 shadow"
                >
                    <img 
                        :src="rank.picUrl" 
                        width="100" 
                        style="min-height: 100px"
                    >
                    <ul class="d-flex flex-wrap ai-center pl-3 text-gray2 text-xs">
                        <li 
                            v-for="(song, index) of rank.song" 
                            :key="index" 
                            class="w100"
                        >
                            {{ ++index }}. {{ song.title }}
                        </li>
                    </ul>
                </div>
            </div>
        </scroll>
    </div>
</template>

<script>
import Scroll from '@/components/common/Scroll'

export default {
    data() {
        return {
            rankList: []
        }
    },
    created() {
        this.fetchRankList()
    },
    methods: {
        async fetchRankList() {
            const res = await this.$http.get('/top/category', { params: { showDetail: 1 } })
            this.rankList = res.data.data.reduce((total, item) => total.concat(item.list), [])
        }
    },
    components: {
        Scroll
    }
}
</script>