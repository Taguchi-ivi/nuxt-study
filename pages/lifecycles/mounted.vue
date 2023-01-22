<template>
    <div>
        <h1>10:Mount</h1>
        <p>VueインスタンスがDOMにマウントされた後に、クライアントで呼ばれます。</p>
        <p>サーバーでは呼び出されません。</p>
        <p>DOMが作られているので、DOMの操作を書くことが出来ます。</p>
        <p>つまりidやclassを指定して要素を取得したりもここで出来ます。</p>
        <h2>
            新たに作成される vm.$el によって置き換えられる el に対して、インスタンスがマウントされたちょうど後に呼ばれます。<br />
            ルートインスタンスがドキュメントの中の要素にマウントされる場合、vm.$el も mounted が呼び出されるときにドキュメントの中に入ります。<br />
            mounted は 全ての子コンポーネントもマウントされていることを保証しないことに注意してください。<br />
            ビュー全体がレンダリングされるまで待つ場合は、 mounted の代わりに vm.$nextTick を使うことができます。
        </h2>
        <a href="https://jp.vuejs.org/v2/api/#mounted">公式リンク</a>

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