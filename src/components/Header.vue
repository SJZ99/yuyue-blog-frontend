<template>
  <div>
        <v-toolbar
            dark
            height="70"
            src='../assets/cyberpunk/street-bar.jpg'
        >
            <v-img
                id="logo"
                max-width="7.5rem"
                src="../assets/logo/icon2.png"
            >
            </v-img>

            <v-spacer></v-spacer>
            <v-spacer></v-spacer>

            <!-- $router.currentRoute.name -->
            <h1 class="my-title">
                {{ title }} 
            </h1>

            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
        </v-toolbar>
  </div>
</template>

<script>
export default {
    data: () =>({

    }),
    props: {
        title: String
    }
}
</script>

<style lang="scss" scope>
@import '../assets/scss/components/header.scss';
</style>