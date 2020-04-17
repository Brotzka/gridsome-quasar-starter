<template>
    <Layout>
        <div class="q-pa-md">

            <div class="row q-col-gutter-md">

                <div class="col-md-6 offset-md-3">
                    <q-card class="my-card">
                        <q-card-section>
                            <div class="text-h6">Gridsome Quasar Starter</div>
                            <p>
                                This project offers you a quickstart with the best out of two worlds:
                            </p>

                            <ul>
                                <li>
                                    Static-Site-Generation with Gridsome
                                </li>
                                <li>
                                    An awesome Material Design 2 based Frontend Framework
                                </li>
                            </ul>

                            <p>
                                This project uses Gridsome as wrapper. Quasar is integrated in it.
                            </p>

                            <q-banner inline-actions rounded class="bg-orange text-white">
                                This project is still in development. So it's not guaranteed that every single function from Gridsome or Quasar is working out of the box.
                            </q-banner>
                        </q-card-section>

                        <q-separator dark inset/>

                        <q-card-actions>
                            <q-btn type="a" href="https://github.com/Brotzka/gridsome-quasar-starter" target="_blank" flat>GitHub-Repo</q-btn>
                            <q-btn type="a" href="https://quasar.dev/" target="_blank" flat>Quasar</q-btn>
                            <q-btn type="a" href="https://gridsome.org/" target="_blank" flat>Gridsome</q-btn>
                        </q-card-actions>
                    </q-card>
                </div>

            </div>
        </div>
    </Layout>
</template>

<script>
    import {
        QIcon,
        QCard,
        QCardSection,
        QCardActions,
        QBtn,
        QList,
        QItem,
        QItemSection,
        QItemLabel,
        QBanner
    } from 'quasar'

    export default {
        metaInfo: {
            title: 'Hello, world!'
        },
        components: {
            QCard,
            QIcon,
            QBtn,
            QCardSection,
            QCardActions,
            QList,
            QItem,
            QItemSection,
            QItemLabel,
            QBanner
        },
        data(){
            return {}
        }
    }
</script>

<style lang="scss" scoped>

</style>
