<template>
    <v-alert type="success">
        子02:{{ userName }}
    </v-alert>
</template>

<script>
export default {
    props: [
        'user-name'
    ]
}
</script>