<template>
    <div>
        <h1>5:asyncData</h1>
        <p>SSR時にサーバーで1度、クライアントではページが読み込まれるたびに行われるメソッドです。</p>
        <p>asyncDataメソッドは、APIなどからデータを取得し、ローカルデータに格納する時に使われます。</p>
        <p>asyncData は pages でのみ使用可能で、このフック内では this にアクセスすることはできません。</p>
        <a href="https://nuxtjs.org/ja/docs/features/data-fetching/#async-data">公式リンク</a>
        <my-life-cycle-back />
    </div>
</template>

<script>
import MyLifeCycleBack from '~/components/Atoms/MyLifeCycleBack'
export default {
    components: {
        MyLifeCycleBack
    }
    // 値を取得
    // async asyncData({ $http }) {
    //     const mountains = await $http.$get('https://api.nuxtjs.dev/mountains')
    //     return { mountains }
    // }
}
</script>