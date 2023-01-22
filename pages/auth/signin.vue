<template>
<div>
    <h1>singin 再登録</h1>
    <p>{{ getUserLoginFlg }}</p>
    <v-row
        align="center"
        justify="space-around"
    >
        <!-- <v-btn
            depressed
            color="blue"
        >
            login
        </v-btn>
        <v-btn
            depressed
            color="red"
        >
            logout
        </v-btn> -->
        <v-btn
            depressed
            color="green"
            @click="changeLogin"
        >
            Switch
        </v-btn>
    </v-row>
    <div class="mt-16">
        <nuxt-link to="/auth/signup">Singup components管理</nuxt-link>
    </div>
</div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
    layout: 'default01',
    data() {
        return {
            userLoginFlg: false
        }
    },
    computed: {
        getUserLoginFlg () {
            return this.$store.getters.getUserLoginFlg;
        }
    },
    methods: {
        addUser (e) {
            this.$store.comit('auth/add', e.target.value)
            console.log(e)
            e.target.value= ''
        },
        changeLogin() {
            // this.$store.dispatch("changeLoginFlg", this.userLoginFlg)
            this.$store.dispatch("changeLoginFlg", this.$store.getters.getUserLoginFlg)
        },
        ...mapMutations({
            toggle: 'auth/toggle'
        })
    },
}
</script>