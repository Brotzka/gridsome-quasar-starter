<template>
    <q-toolbar>
        <q-toolbar-title>
            <q-avatar class="q-mr-md">
                <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
            <q-btn to="/" v-html="$static.metadata.siteName"></q-btn>
        </q-toolbar-title>

        <q-space />

        <q-separator dark vertical />
        <q-btn to="/" label="Home" flat active/>
        <q-btn to="/about/" label="About" flat />
    </q-toolbar>
</template>

<script>
    import {
        QToolbar,
        QToolbarTitle,
        QAvatar,
        QSpace,
        QList,
        QBtn,
        QBtnDropdown,
        QItemSection,
        QItemLabel,
        QItem,
        QIcon,
        QSeparator,
        ClosePopup
    } from 'quasar'

    export default {
        name: "MainNav",
        components: {
            QToolbar,
            QToolbarTitle,
            QAvatar,
            QSpace,
            QList,
            QBtn,
            QBtnDropdown,
            QItemSection,
            QItemLabel,
            QItem,
            QIcon,
            QSeparator
        },
        directives: {
            ClosePopup
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

<style scoped>

</style>