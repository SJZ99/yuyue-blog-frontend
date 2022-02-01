<template>
    <div id="footer">
        <v-bottom-navigation
            id="navigation"
            v-model="select"
            :background-color="color"
            shift
            dark
            fixed
        >

            <v-btn 
                v-for="(button, index) in buttons"
                :key="index"
                @click="changePath(`/${button.toLowerCase()}`)"
                icon
                id="btn"
            >
                <p id="footer-text">{{ button }}</p>
                <v-icon size="25px">{{ icons[index] }}</v-icon>
            </v-btn>
            

        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    data: ()=> ({
        select: 2,
        buttons: ['Literature', 'Program', 'Home', 'Chat', 'Login'],
        icons:['mdi-lead-pencil', 'mdi-code-json', 'mdi-home', 'mdi-forum', 'mdi-login'],
    }),
    computed: {
        color() {
            // console.log(this.$router)
            switch(this.select) {
                case 0: return '#80325E'
                case 1: return '#06657B'
                case 2: return '#2C2761'
                case 3: return '#145982'
                case 4: return '#1B1129'
                default: return '#2C2761'
            }
        }
    },
}
</script>

<style lang="scss" scope>
@import '../assets/scss/components/footer.scss';
</style>