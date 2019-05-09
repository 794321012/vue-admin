<template>
    <div>
        <app-header></app-header>
        <app-nav></app-nav>
        <router-view />
        <app-footer></app-footer>
    </div>
</template>

<script>
import appHeader from '@/components/header.vue'
import appFooter from '@/components/footer.vue'
import appNav from '@/components/nav.vue'
export default {
    name: 'layout',
    components: {
        appHeader,
        appFooter,
        appNav
    },
    data() {
        return {
            test: 0
        }
    }
}
</script>

<style scope lang="scss"></style>
