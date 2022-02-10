<template>
    <div>
        <div id="box">
            <h2 id="custom-title">Series</h2>
            <series-card
                v-for="(card, index) in series"
                :key="index"
                :img="card.img"
                :amount="card.amount"
                :title="card.topic"
                @click="changePath(`/literature/${card.id}`)"
            ></series-card>
        </div>
    </div>
</template>

<script>
import SeriesCard from '../components/SeriesCard.vue'
export default {
    components: {
        SeriesCard
    },
    data: () => ({
        series: [
            {
                id: 1,
                topic: "如果相遇注定要分離",
                amount: 315,
                img: require('../assets/cyberpunk/city.jpg')
            },
            {
                id: 2,
                topic: "散文",
                amount: 20,
                img: require('../assets/cyberpunk/smoke-building.jpg')
            },
        ],
    }),
    methods: {
        fetchSeries() {
            this.axios
                    .get("/literature/series")
                    .then(response => {
                        this.series = response.data
                        this.series.forEach(topic => {
                            topic.img = `${this.axios.defaults.baseURL}/literature/img/${topic.img}`
                        })
                    })
        }
    },
    created() {
        this.fetchSeries()
        
    }
}
</script>

<style lang="scss" scope>
@import '../assets/scss/components/common.scss';
</style>