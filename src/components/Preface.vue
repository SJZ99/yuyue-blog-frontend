<template>
  <div id="preface">
      <h2 id="text">{{ text }}</h2>
  </div>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>

<style lang="scss" scope>
#preface {
    background: #21476f;
    border-radius: 3px;
    margin: 0 auto;
    margin-bottom: 1.8rem;
    margin-top: 1.5rem;
    width: 100%;
}
#text {
    color: #ebebeb;
    margin-left: .8em;
    margin-right: .8em;
}
</style>