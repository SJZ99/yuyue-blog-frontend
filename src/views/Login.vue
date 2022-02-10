<template>
    <div id="wrapper">
        <v-btn
            light
            id="login-button"
            @click="login()"
        >
            <h3>Login</h3>
        </v-btn>
        
    </div>
</template>

<script>
import { keycloak } from '../js/KeycloakTool'
export default {
    methods: {
        login() {
            keycloak.login()
        }
    },
}
</script>

<style>
#wrapper {
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
}

#login-button {
    margin: 0 auto;
    margin-top: 35vh;
}
</style>