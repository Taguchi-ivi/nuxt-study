<template>
<div>
    <h1>lify cycle用のpageです</h1>
    <p>4:validate</p>
    <p>サーバーではSSR時に1回、クライアントではページ遷移のたびに呼ばれます。</p>
    <p>使いたいコンポーネント内で、validateメソッドを追加すれば良いだけです。</p>
    <p>こちらはページのバリデーションであってデータのバリデーションではない</p>
    <p>このvalidateでエラーが出たときは、自動的にエラーページが表示されます。</p>
    <p>下記：動的に変化するURLのチェックができたりするんですね。</p>
    <a href="https://nuxtjs.org/ja/docs/components-glossary/validate/">公式リンク</a>
    <my-life-cycle-back />

</div>
</template>

<script>
import MyLifeCycleBack from '~/components/Atoms/MyLifeCycleBack'
export default {
    components: {
        MyLifeCycleBack
    },
    // validata({params}){
    //     // 数字でなければなりません。違ったら自動的にエラーページに遷移。
    //     return /^\d+$/.test(params.id)
    // },
    // validate({ params, store }) {
    //     // 例えばストア 内の一部のデータ（アクションの前に nuxtServerInit で格納されます）を確認することもできます
    //     // `params.id` が存在しているカテゴリかどうかを確認します
    //     return store.state.categories.some(category => category.id === params.id)
    // }
}
</script>