<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
    props: {
        top: {
            type: Number,
            default: 0
        },
        list: {
            type: Array,
            required: true
        },
        click: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        initScroll() {
            this.$refs.wrapper.style.top = this.top + 'px';
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: this.click
            });
        },
        refresh() {
            this.scroll && this.scroll.refresh();
        }
    },
    mounted() {
        this.initScroll();
    },
    watch: {
        list() {
            this.$nextTick(() => {
                this.refresh();
            })
        }
    }
}
</script>

<style>
.wrapper {
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>