<template>
    <q-layout view="hHh lpR fFf">

        <q-header reveal elevated class="bg-primary text-white">
            <main-nav></main-nav>
        </q-header>

        <q-page-container>
            <div class="row">
                <div class="col-md-10 offset-md-1">
                    <slot/>
                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>

<script>
    import {
        QLayout,
        QHeader,
        QToolbar,
        QToolbarTitle,
        QAvatar,
        QPageContainer
    } from 'quasar'

    import MainNav from "../components/Organisms/MainNav"

    export default {
        data() {
            return {}
        },
        components: {
            MainNav,
            QLayout,
            QHeader,
            QToolbar,
            QToolbarTitle,
            QAvatar,
            QPageContainer
        }
    }
</script>

<static-query>
    query {
        metadata {
            siteName
        }
    }
</static-query>