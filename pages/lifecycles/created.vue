<template>
    <div>
        <h1>7:created</h1>
        <p>こちらはVueインスタンスが初期化されたあと、データも初期化されたときに呼ばれます。</p>
        <p>ここで初めて、this.data=data;みたいにthisが使える</p>
        <p>
            インスタンスが作成された後に同期的に呼ばれます。<br />
            この段階では、インスタンスは、データ監視、算出プロパティ、メソッド、watch/event コールバックらのオプションのセットアップ処理が完了したことを意味します。<br />
            しかしながら、マウンティングの段階は未開始で、$el プロパティはまだ利用できません。
        </p>
        <a href="https://jp.vuejs.org/v2/api/#created">公式リンク</a>
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