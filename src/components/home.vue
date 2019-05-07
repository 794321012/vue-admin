<template>
    <div>
        <app-header></app-header>
        <app-nav></app-nav>
        <app-footer></app-footer>
    </div>
</template>

<script>
import appHeader from './header.vue'
import appFooter from './footer.vue'
import appNav from './nav.vue'
export default {
    name: 'home',
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

<style scope></style>
