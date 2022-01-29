<template>
    <div>
        <v-bottom-navigation
            v-model="select"
            :background-color="color"
            shift
            dark
        >

            <v-btn 
                v-for="(button, index) in buttons"
                :key="index"
                icon
            >
                <p>{{ button }}</p>
                <v-icon>{{ icons[index] }}</v-icon>
            </v-btn>
            

        </v-bottom-navigation>
    </div>
</template>

<script>
const { isNavigationFailure, NavigationFailureType } = this.$router
export default {
    data: ()=> ({
        select: 2,
        buttons: ['Programming', 'Literature', 'Home', 'Chat', 'Login'],
        icons:['mdi-code-json', 'mdi-lead-pencil', 'mdi-home', 'mdi-forum', 'mdi-login'],
    }),
    computed: {
        color() {
            switch(this.select) {
                case 0: return 'blue-grey'
                case 1: return 'teal'
                case 2: return 'brown'
                case 3: return 'indigo'
                default: return 'blue-grey'
            }
        }
    },
    method: {
        changePath(path) {
            this.$router.push(path).catch(
                failure => {
                    
                }
            )
        }
    }
}
</script>

<style lang="scss" scope>
@import '../assets/scss/components/footer.scss';
</style>