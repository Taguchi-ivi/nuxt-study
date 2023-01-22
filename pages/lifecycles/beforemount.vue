<template>
    <div>
        <h1>9:beforeMount</h1>
        <p>Vueインスタンスが実際にDOMにマウント（結合）される前に、クライアントのみで呼び出されるフックです。</p>
        <p>サーバーでは呼び出されません。</p>
        <p>DOMに反映される前になにかアレコレしたいときに、こっちに書くのかな、と思います。</p>
        <h2>render 関数が初めて呼び出されようと、マウンティングが開始される直前に呼ばれます。</h2>
        <a href="https://jp.vuejs.org/v2/api/#beforeMount">公式リンク</a>

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