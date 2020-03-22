<template>
    <div class="my-swiper">
        <swiper
            v-if="swiperList.length"
            :options="swiperOption" 
        >
            <swiper-slide 
                v-for="(item, index) of swiperList" 
                :key="index"
            >
                <img 
                    class="w100"
                    :src="item.img"
                    @load="imgLoad"
                >
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    props: {
        swiperList: {
            type: Array,
            required: true
        },
        swiperOption: {
            type: Object,
            required: true
        }
    },
    methods: {
        //图片加载完成
        imgLoad() {
            this.$emit('img-load');
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>