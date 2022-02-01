<template>
    <div>
        <div id="box">
            <series-card
                v-for="(card, index) in series"
                :key="index"
                :img="card.img"
                :amount="card.amount"
                :title="card.name"
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
                name: "如果相遇注定要分離",
                amount: 315,
                img: require('../assets/cyberpunk/city.jpg')
            },
            {
                name: "散文",
                amount: 20,
                img: require('../assets/cyberpunk/smoke-building.jpg')
            },
        ],
    }),
}
</script>

<style lang="scss" scope>
@import '../assets/scss/components/box.scss';
</style>