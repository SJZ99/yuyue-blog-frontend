<template>
    <div>
        <v-btn
            @click="login()"
        ></v-btn>
        <a href="https://localhost:8081/yuyue-api/manage/login">
            backend
        </a>
    </div>
</template>

<script>
import { keycloak, initFunction } from '../js/module/KeycloakTool'
export default {
    methods: {
        login() {
            keycloak.login()
        }
    },
}
</script>

<style>

</style>