<template>
    <div class="layout">
        <div class="app-nav">
            <app-nav></app-nav>
        </div>
        <div class="app-other">
            <app-header></app-header>
            <div class="content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
import appHeader from '@/components/header.vue'
import appNav from '@/components/nav.vue'
export default {
    name: 'layout',
    components: {
        appHeader,
        appNav
    },
    data() {
        return {
            test: 0
        }
    }
}
</script>

<style scope lang="scss">
.layout {
    display: flex;
    .app-other {
        flex: auto;
        padding: 0 15px;
        box-sizing: border-box;
    }
}
</style>
