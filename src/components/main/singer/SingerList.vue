<template>
    <div class="singer-list">
        <ul 
            v-for="singer of list" 
            :key="singer.singer_id"
        >
            <li class="d-flex ai-center px-4 py-3">
                <img 
                    :src="singer.singer_pic" 
                    style="width: 60px;border-radius: 50%;"
                >
                <span class="pl-3 text-gray2">
                    {{ singer.singer_name }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        }
    }
}
</script>