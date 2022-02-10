<template>
    <div>
        <v-dialog
            max-width="600"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    text
                    dark
                    v-on="on"
                    v-bind="attrs"
                >
                    {{buttonText}}
                </v-btn>
            </template>

            <template v-slot:default="dialog">
            <v-card>
                <v-toolbar
                    color="#001126"
                    dark
                >New Article Settings</v-toolbar>
                
                <div id="article-dialog-content-wrapper">
                    <v-select
                        v-model="selectedType"
                        :items="types"
                        hint="Type"
                        persistent-hint
                        dense
                        outlined
                    ></v-select>

                    <v-select
                        v-model="selectedSubtype"
                        :items="subtypes[selectedType]"
                        hint="Subtype"
                        persistent-hint
                        dense
                        outlined
                    ></v-select>
                </div>

                <v-card-actions class="justify-end">
                    <v-btn
                        text
                        color="#921111"
                        @click="dialog.value = false"
                    >Cancel</v-btn>
                    <v-btn
                        text
                        color="#198964"
                        @click="dialog.value = false; changePath(`/article-editor/create/${selectedType}/${selectedSubtype}`)"
                    >Next</v-btn>
                </v-card-actions>
            </v-card>
        </template>
      </v-dialog>
    </div>
</template>

<script>
export default {
    data: () => ({
        selectedType: "program",
        selectedSubtype: "java",
        selectedName: "language",
        types: [
            "program", "literature"
        ],
        inits: [false, false],
        subtypes: {
            program: [
                "java", "kotlin"
            ],
            literature: [
                "如果我去吃大便", "散文"
            ]
        }
    }),
    props: {
        buttonText: {
            type: String,
            default: "new article"
        }
    },
    methods: {
        fetchSubtype: function() {
            let index = 0;
            let subtypeName = "languages"
            switch (this.selectedType) {
                case 'program':
                    index = 0
                    subtypeName = "languages"
                    this.selectedName = "language"
                    break
                case 'literature':
                    index = 1
                    subtypeName = "series"
                    this.selectedName = "topic"
                    break
            }

            if(!this.inits[index]) {
                this.axios
                    .get(`/${this.selectedType}/${subtypeName}`)
                    .then(response => {
                        this.subtypes[this.selectedType] = response.data
                        this.inits[index] = true
                        this.subtypes[this.selectedType].forEach((element, index) => {
                            this.subtypes[this.selectedType][index] = element[this.selectedName]
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            
        }
    },
    watch: {
        selectedType: function() {
            this.fetchSubtype()
        }
    },
    created() {
        this.fetchSubtype()
    },
}
</script>

<style scope>
#article-dialog-content-wrapper {
    margin: 0 auto;
    margin-top: 8%;
    width: 90%;
}

</style>