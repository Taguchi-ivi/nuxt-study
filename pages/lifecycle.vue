<template>
    <div class="mx-auto">
        <h1>lifecycleのお勉強 順序</h1>
        <p><a href="https://lab.astamuse.co.jp/entry/2019/05/29/114500">lifeCycleの覚書</a></p>
        <v-container>
            <v-row no-gutters>
                <v-col
                    cols="16"
                    sm="4"
                >
                    <ul class="mt-16 text--white">
                        <li>1:server middleware(サーバのみ） server-middleware/ligger.js</li>
                        <li><a href="https://nuxtjs.org/ja/docs/configuration-glossary/configuration-servermiddleware/"> └公式リンク</a></li>
                        <li>2:nuxt Server Init(サーバにみ) store/inde.js</li>
                        <li><a href="https://nuxtjs.org/ja/docs/directory-structure/store/#nuxtserverinit-アクション"> └公式リンク</a></li>
                        <li>3:Route Middleware middleware/*</li>
                        <li><a href="https://nuxtjs.org/ja/docs/directory-structure/middleware/#ルーターミドルウェア"> └公式リンク</a></li>
                        <li>4:validate <nuxt-link to="lifecycles/sample">page/lifecycles/sample.vue</nuxt-link></li>
                        <li><a href="https://nuxtjs.org/ja/docs/components-glossary/validate/"> └公式リンク</a></li>
                        <li>5:asyncData <nuxt-link to="lifecycles/async">page/lifecycles/async.vue</nuxt-link></li>
                        <li><a href="https://nuxtjs.org/ja/docs/features/data-fetching/#async-data"> └公式リンク</a></li>
                        <li>6:before Create <nuxt-link to="lifecycles/beforecreate">page/lifecycles/beforecreate.vue</nuxt-link></li>
                        <li><a href="https://jp.vuejs.org/v2/api/#beforeCreate"> └公式リンク</a></li>
                        <li>7:created <nuxt-link to="lifecycles/created">page/lifecycles/created.vue</nuxt-link></li>
                        <li><a href="https://jp.vuejs.org/v2/api/#created"> └公式リンク</a></li>
                        <li>8:fetch <nuxt-link to="lifecycles/fetch">page/lifecycle/fetch.vue</nuxt-link></li>
                        <li><a href="https://nuxtjs.org/ja/docs/components-glossary/fetch/"> └公式リンク</a></li>
                        <li>9:beforeMount(クライアントのみ) <nuxt-link to="lifecycles/beforemount">page/lifecycles/bedoremount.vue</nuxt-link></li>
                        <li><a href="https://jp.vuejs.org/v2/api/#beforeMount"> └公式リンク</a></li>
                        <li>10:mouted(クライアントのみ) <nuxt-link to="lifecycles/mounted">page/lifecycles/mounted.vue</nuxt-link></li>
                        <li><a href="https://jp.vuejs.org/v2/api/#mounted"> └公式リンク</a></li>
                    </ul>
                </v-col>
                <v-col
                    cols="16"
                    sm="4"
                    class="ml-5"
                >
                    <v-img
                        src="/lifecycle.jpg"></v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    layout: 'default01',
    middleware: ['sample']

}
</script>