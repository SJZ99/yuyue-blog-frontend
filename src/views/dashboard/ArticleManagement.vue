<template>
  <div>
        <div id="box">
            <v-row id="bar-row">
                <v-col>
                    <article-dialog></article-dialog>
                </v-col>
                
                <v-col>
                    <v-select
                        v-model="type"
                        :items="['program', 'literature']"
                        label="Select"
                        persistent-hint
                        return-object
                        single-line
                        dark
                    ></v-select>
                </v-col>
            </v-row>
            <div 
                id="list"
                v-for="(article, index) in articles[type]"
                :key="index"
            >
                <divider />

                <v-card
                    dark
                    flat
                    color="#001126"
                    id="content-wrapper">
                    <h1 id="manage-article-title">{{ article.title }}</h1>
                    <h3 id="manage-article-preface">{{ article.preface }}</h3>

                    <v-card-actions>
                        <v-menu>
                            <template #activator='{ on, attrs }'>
                                <v-spacer />
                                <v-btn 
                                    icon
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon dark>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                    v-for="(link, index) in links"
                                    :key="index"
                                >
                                <v-list-item-title>{{ link }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-card-actions>
                </v-card>
                
            </div>
            <divider />
        </div>
  </div>
</template>

<script>
import ArticleDialog from '../../components/ArticleDialog.vue';
import Divider from '../../components/Divider.vue'
export default {
    components: {
        Divider,
        ArticleDialog
    },
    data: () => ({
        type: "program",
        links: [
            'edit',
        ],
        actions: [
            ''
        ],
        inits: [false, false],
        articles: {
            program: [
                {
                    id: 1,
                    title: "titleeee",
                    preface: "preface......sva.sdvavasd..vasvadv",
                },
                {
                    title: "tletletletletletle",
                    preface: "preface.. ..sva .sdv avasd..vas vadv",
                }
            ],
            literature: [
                {
                    title: "【tags】titleeee",
                    preface: "preface......sva.sdvavasd..vasvadv",
                },
                {
                    title: "【tle】tletletletletle",
                    preface: "preface.. ..sva .sdv avasd..vas vadv",
                }
            ]
        },
    }),
    watch: {
            type: function () {
                this.fetchPreview()
            }
        },
    methods: {
        fetchPreview: function() {
            let index = 0;
            switch (this.type) {
                case 'program':
                    index = 0
                    break
                case 'literature':
                    index = 1
                    break
            }

            if(!this.inits[index]) {
                this.axios
                    .get(`/${this.type}/previews`)
                    .then(response => {
                        this.articles[this.type] = response.data
                        this.inits[index] = true
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            
        }
    },
    created() {
        this.fetchPreview()
    },
}
</script>

<style lang="scss" scope>
@import '../../assets/scss/components/common.scss';
#bar-row {
    align-items: center;
    display: flex;
    margin-top: 0.1vh;
}

#content-wrapper {
    margin: 0 auto;
    overflow-wrap: break-word;
    width: 85%;
}

#manage-article-title {
    color: #fff;
}

#manage-article-preface {
    color: #fff;
}
</style>