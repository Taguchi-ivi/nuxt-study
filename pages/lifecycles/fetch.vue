<template>
    <div>
        <h1>8:fetch</h1>
        <p>サーバーではSSR時に1度、クライアントではページを遷移するたびに呼ばれるメソッドです。</p>
        <p>fetchメソッドはAPIなどからデータを取得する時に使われます。</p>
        <h2>先ほどasyncDataという似たようなメソッドが出てきましたが、何が違うかというと、</h2>
        <ul>
            <li>fetchでthisが使えるが、asyncDataでは使えない</li>
            <li>fetchでthisが使えるが、asyncDataでは使えない</li>
            <li>fetchはすべてのVueコンポーネント（.vueファイル）内で使えるが、<br />
                asyncDataはページコンポーネント（pagesディレクトリ配下の.vueファイル）でしか使えない
            </li>
            <li>fetchではローカルデータを直接操作できるが、asyncDataはローカルデータとマージする</li>
        </ul>
        <p>fetchはcreatedの後に、asyncDataはcreatedの前に位置するフックでした。<br />
        なので位置が違う。</p>
        <a href="https://nuxtjs.org/ja/docs/components-glossary/fetch/">公式リンク</a>
        <div>
            <a href="https://nuxtjs.org/ja/announcements/understanding-how-fetch-works-in-nuxt-2-12/#asyncdata-vs-fetch">asyncとfetchの違い</a>
        </div>

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