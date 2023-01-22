<template>
    <div>
        <h1>6:before Create</h1>
        <p>Vueインスタンスが初期化される時に呼び出されるフックです。</p>
        <p>インスタンスが初期化されるが、データにはまだアクセスできません。</p>
        <p>つまりthisを使って、ローカルデータに何かを代入することはできない</p>
        <p>データの監視とイベント/ウォッチャのセットアップより前の、インスタンスが初期化されるときに同期的に呼ばれます。</p>
        <a href="https://jp.vuejs.org/v2/api/#beforeCreate">公式リンク</a>
        <my-life-cycle-back />
    </div>
</template>

<script>
import MyLifeCycleBack from '~/components/Atoms/MyLifeCycleBack'
export default {
    components: {
        MyLifeCycleBack
    },
}
</script>