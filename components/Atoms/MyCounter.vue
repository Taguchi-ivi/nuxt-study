<template>

    <v-btn color="primary" @click="onclick">
        {{ step }}
    </v-btn>
</template>

<script>
export default {
    props: [
        'step'
    ],
    emits: ['plus-minus'],
    // data() {
    //     return {
    //         current :0
    //     }
    // },
    computed: {},
    methods: {
        onclick() {
            // this.current += e;
            console.log(Number(this.step));
            this.$emit('plus-minus', Number(this.step));
        }
    }
}
</script>