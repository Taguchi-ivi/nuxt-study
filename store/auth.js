
export const state = () => ({
    user: []
})

export const mutations = {
    add(state, name) {
        state.user.push({
            name,
            Flg: false
        })
    },
    remove(sate, { users }){
        state.user = []
    },
    toggle(state, users) {
        user.Flg = !user.Flg;
    }
}