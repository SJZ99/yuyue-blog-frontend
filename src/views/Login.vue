<template>
    <div>
        <!-- <v-btn
            @click="login()"
        ></v-btn> -->
        <a href="https://localhost:8081/yuyue-api/manage/login">
            Login with google
        </a>
    </div>
</template>

<script>
import vuex from '../js/vuex'
export default {
    methods: {
        login() {
            let loginInfo = {}
            this.axios.get("/manage/login")
                    .then(response => {
                        loginInfo.name = response.data.name
                        loginInfo.email = response.data.email
                        vuex.commit("SET_LOGIN_INFO", loginInfo)
                        console.log(loginInfo)
                    })
        }
    },
}
</script>

<style>

</style>