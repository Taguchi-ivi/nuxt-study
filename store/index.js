// nuxtServerInit
// サーバー側でのみ実行されるフック
// ここではあらかじめ初期値を渡す操作を書いたり、ログイン認証したりするコードを記載する
// つまり「クライアントサイドに処理を渡す前にサーバーでやっておかなきゃ！」な処理を書く。
// 使い方はstore/index.jsにnuxtServerInitアクションを追加するだけ。
// Doc:https://nuxtjs.org/ja/docs/directory-structure/store/#nuxtserverinit-アクション

//
// actions: {
//     nuxtServerInit ({ commit }, { req }) {
//         if (req.session.user) {
//         commit('user', req.session.user)
//         }
//     }
// }

// ちなみにCookieに保存したデータを取り出したいときも
// const cookie = req.headers.cookie

export const state = () => ({
    // userLoginFlg: false
    // userLoginFlg: null
    userLoginFlg: false
})

export const getters = {
    getUserLoginFlg: state => state.userLoginFlg
}

export const mutations = {
    // increment(state) {
    //     state.userLoginFlg = !state.userLoginFlg
    // }
    changeLoginMutations(state, userLoginFlg){
        state.userLoginFlg = !state.userLoginFlg;
    }
}

export const actions = {
    changeLoginFlg({ commit }, userLoginFlg) {
        commit("changeLoginMutations", userLoginFlg)
    }
}