<template>
    <div>
        <h1 id="content-title">{{ title }}</h1>
        <h5 id="content-date">{{ date }}</h5>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        date: String
    }
}
</script>

<style scope>
#content-title {
    color: #ebebeb;
    margin-left: 0%;
    margin-top: 1.5rem;
    overflow-wrap: break-word;
}

#content-date {
    color: #ebebeb;
    filter: opacity(0.6);
    margin-left: 5%;
}
</style>