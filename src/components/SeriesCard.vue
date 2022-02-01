<template>
    <div id="horizon-card">
        <v-img 
            :src="img"
            id="horizon-card-img"
        ></v-img>

        <div id="horizon-card-text-wrap">
            <h3 id="horizon-card-title">{{ title }}</h3>
            <h6 id="horizon-card-amount">共 {{ amount }} 篇</h6>
        </div>
        
    </div>
</template>

<script>
export default {
    props: {
        img: Object,
        title: String,
        amount: Number,
    }
}
</script>

<style lang="scss" scope>
#horizon-card {
    align-items: center;
    background: #202121;
    border-radius: 6px;
    box-shadow: 2px 2px 5px 0px #000;
    display: flex;
    flex-wrap: wrap;
    margin-top: 3vh;
    overflow: hidden;
}

#horizon-card:hover {
    filter: brightness(130%);
}

#horizon-card-img {
    max-width: 33.3%;
}

#horizon-card-text-wrap {
    align-self: stretch;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
}

#horizon-card-title {
    align-self: flex-end;
    color: #ebebeb;
    flex-grow: 1;
    flex-basis: 3;
    text-align: center;
    margin-bottom: -7%;
    width: 66.6%;
}

#horizon-card-amount {
    align-self: flex-end;
    color: #ebebeb;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 1;
    text-align: end;
    margin-right: 4px;
    margin-bottom: 2px;
    width: 66.6%;
}
</style>