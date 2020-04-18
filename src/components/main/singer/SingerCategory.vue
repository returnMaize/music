<template>
    <div class="singer-category">
        <div 
            class="px-3"
            v-for="(value, key) of singerCategory" 
            :key="key"
        >
            <ul class="d-flex text-gray2 text-xs flex-wrap">
                <li 
                    class="p-1 m-2" 
                    v-for="(category, index) of value" 
                    :key="category.id"
                    :class="{ 'singer-active': activeIndex[key] === index }"
                    @click="categoryClick(key, index)"
                >
                    {{ category.name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        singerCategory: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            activeIndex: {
                sex: 0,
                genre: 0,
                area: 0
            }
        }
    },
    methods: {
        categoryClick(key, index) {
            this.activeIndex[key] = index
            const params = {}
            for (let key in this.activeIndex) {
                params[key] = this.singerCategory[key][this.activeIndex[key]].id
            }
            this.$emit('category-click', params)
        }
    }
}
</script>