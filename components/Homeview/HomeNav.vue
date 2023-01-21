<template>
    <div>
        <h1>nav</h1>
        <main-dialogs />
        <li
            v-for="(item,i) of items"
            :key="i"
        >
            <nuxt-link
                :to="`/article/` + i"
                class="mt-5"
            >
                article {{ i }} へ
            </nuxt-link>
        </li>
    </div>
</template>

<script>
import MainDialogs from '~/components/Dialogs/MainDialogs'
// import MainDialogs from '../Dialogs/MainDialogs.vue'
export default {
    components: {
        MainDialogs
    },
    data () {
        return {
            items: [
                {name: '田中', age: '25歳'},
                {name: '田中', age: '26歳'},
                {name: '田中', age: '27歳'},
            ]
        }
    }
}
</script>