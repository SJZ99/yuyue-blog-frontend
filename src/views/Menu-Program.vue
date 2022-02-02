<template>
    <div>
        <div id="box">
            <h2 id="custom-title">Languages</h2>
            <v-card 
                id="card"
                v-for="(lang, index) in languages"
                :key="index"
                @click="changePath(`/program/${lang.language}`)"
                dark
            >
                <v-img
                    id="img"
                    :src="imgs[index]"
                >
                    <h1 id="card-text">{{ lang.language }}</h1>
                </v-img>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        languages: [
            {
                language: 'Java',
                description: "Kotlin's father"
            },
            {
                language: 'Kotlin',
                description: 'The best programming language in the world'
            },
            {
                language: 'Js',
                description: 'It is a world-known programming language'
            },
            {
                language: 'HTML',
                description: 'Not a programming language'
            },
            {
                language: 'CSS',
            },
        ],
        imgs: [
            require('../assets/program-card/1.jpg'), require('../assets/program-card/2.jpg'), require('../assets/program-card/3.jpg'), require('../assets/program-card/4.jpg'), 
            require('../assets/program-card/5.jpg'), require('../assets/program-card/6.jpg'), require('../assets/program-card/7.jpg'), require('../assets/program-card/8.jpg'), 
            require('../assets/program-card/9.jpg'), require('../assets/program-card/10.jpg'), require('../assets/program-card/11.jpg'), require('../assets/program-card/12.jpg'), 
        ]
    }),

    methods: {
        fetchLanguage() {
            this.axios.get("/program/languages")
                        .then(response => {
                            this.languages = response.data
                        })
                        .catch(error => {
                            console.log(error)
                        })
        }
    },

    created () {
        this.fetchLanguage()
        console.log(this.languages)
    },
}
</script>

<style lang="scss" scope>
@import '../assets/scss/components/common.scss';
#card {
    margin: 3vh auto;
    width: 100%;
}

#card:hover {
    filter: brightness(130%);
}

#card-text {
    text-align: center;
}

#img {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>