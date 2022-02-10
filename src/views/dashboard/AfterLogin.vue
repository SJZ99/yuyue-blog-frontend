<template>
  <div id="container">
      <div id="button-group">
        <v-btn
            class="list-button"
            @click="accountManage()"
        >
            <h3>Manage Account</h3>
        </v-btn>

        <v-btn
            class="list-button"
            @click="changePath('/manage-article')"
        >
            <h3>Manage Article</h3>
        </v-btn>

        <v-btn
            class="list-button"
            @click="changePaht('/write-article')"
        >
            <h3>Writing Article</h3>
        </v-btn>
      </div>   
  </div>
</template>

<script>
import { keycloak } from '../../js/module/KeycloakTool'
export default {
    data: () => ({
        
    }),
    methods: {
        accountManage: function() {
            keycloak.accountManagement()
        }
    },
}
</script>

<style>
#container {
    height: 100vh;
}
#button-group {
    align-content: flex-start; 
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin: 0 auto;
    margin-top: 23vh;
    max-width: 500px;
}
.list-button {
    width: 70vw;
    max-width: 500px;
    margin-top: 3vh;
}
</style>