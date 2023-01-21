<template>
    <h1>hello {{ $route.params.id }} 番こんにちは</h1>
</template>

<script>
export default {
    layout: 'default01',
    data() {
        return {
        }
    },
    mounted() {
        console.log("ここから$routeの表示!!!!")
        console.log(this.$route);
    }
}
</script>