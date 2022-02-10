<template>
    <node-view-wrapper class="dom">
        <preface>
            <node-view-content class="content-dom" />
        </preface>
    </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, NodeViewContent } from '@tiptap/vue-2'
import Preface from './Preface.vue'
export default {
    components: {
        NodeViewWrapper,
        NodeViewContent,
        Preface,
    },
}
</script>

<style>

</style>