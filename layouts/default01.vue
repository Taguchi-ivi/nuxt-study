<template>
    <v-app>
        <home-nav />
        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
        <home-footer />
    </v-app>
</template>

<script>
import HomeNav from '~/components/Homeview/HomeNav';
import HomeFooter from '~/components/Homeview/HomeFooter';

export default {
    name: 'default01',
    components: {
        'home-nav': HomeNav,
        'home-footer': HomeFooter
    },
    data() {
        return {
        }
    },
    // computed() {}
}
</script>
