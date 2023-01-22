<template>
<div>
    <h1>singup 新規登録</h1>
    <h2>これはVuexを使わずに実装したものになります。</h2>
    <p>{{ loginFlg }}</p>
    <v-row
        align="center"
        justify="space-around"
    >
        <v-btn
            depressed
            color="blue"
            @click="login"
        >
            login
        </v-btn>
        <v-btn
            depressed
            color="red"
            @click="logout"
        >
            logout
        </v-btn>
        <v-btn
            depressed
            color="green"
            @click="switchLogin"
        >
            Switch
        </v-btn>
    </v-row>
    <div class="mt-16">
        <nuxt-link to="/auth/signin">Signin Vuex管理</nuxt-link>
    </div>

</div>
</template>

<script>
export default {
    layout: 'default01',
    data() {
        return {
            loginFlg: false
        }
    },
    methods: {
        login() {
            this.loginFlg = true;
        },
        logout() {
            this.loginFlg = false;
        },
        switchLogin() {
            // const Flg = this.loginFlg;
            // console.log(this.loginFlg);
            // this.loginFlg = !Flg;
            this.loginFlg = !this.loginFlg;
        }
    },
}
</script>