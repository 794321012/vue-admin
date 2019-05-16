<template>
    <div class="clearfix app-header">
        <div class="el-icon-menu menu" @click="toggleMenu"></div>
        <div class="header-right fr">tadpole</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: 0
        }
    },
    methods: {
        toggleMenu() {
            this.$store.dispatch('toggle')
        }
    }
}
</script>

<style scope lang="scss">
.app-header {
    height: 60px;
    line-height: 60px;
    .header-right {
        padding-right: 25px;
        cursor: pointer;
    }
    .menu {
        font-size: 20px;
        color: #666;
        cursor: pointer;
    }
}
</style>
