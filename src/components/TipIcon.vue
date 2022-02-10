<template>
    <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
            <v-icon dark class="icon" v-bind="attrs" v-on="on">{{icon}}</v-icon>
        </template>
        <span>{{tip}}</span>
    </v-tooltip>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'mdi-code-braces'
        },
        tip: {
            type: String,
            default: 'icon'
        },
    }
}
</script>

<style>

</style>