<template>
    <v-app>
        <HomeNav />
        <v-main>
            <v-container>
                <Nuxt />
            </v-container>
        </v-main>
        <HomeFooter />
    </v-app>
</template>

<script>
import HomeNav from '~/components/Homeview/HomeNav';
import HomeFooter from '~/components/Homeview/HomeFooter';

export default {
    name: 'default01',
    components: {
        HomeNav,
        HomeFooter
    },
    data() {
        return {
        }
    },
    // computed() {}
}
</script>
