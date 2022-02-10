<template>
    <div>
        <tiptap></tiptap>
        <setting
            @save-img.stop=""
            @save-all.stop=""
            @publish.stop=""
        ></setting>
    </div>
</template>

<script>
import Tiptap from '../../components/Tiptap.vue'
import Setting from './Setting.vue'
import router from '../../js/router'
import vuex from '../../js/vuex'

export default {
    components: { Tiptap, Setting },
    data: () => ({
        type: router.currentRouter.params.type,
        subtype: router.currentRouter.params.subtype,
        id: router.currentRouter.params.id,
    }),
    methods: {
        saveImg(img) {
            this.axios
                    .post(`/writer/${this.type}/add-img`, img)
                    .then(response => {
                        vuex.commit("SET_IMG_NAME", response.data)
                    })
                    .catch(error => {

                    })
        },
        saveAll() {
            // create
            if(this.subtype) {

                // this.axios
                //         post(`/writer/${this.type}/add-article`, )
            }
            // update (id should not be null)
            else {

            }
        },
        publish() {

        },
    }
}
</script>

<style>

</style>