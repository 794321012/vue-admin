<template>
    <div>
        <div class="login">这是登录页</div>
        <div class="footer">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
import appFooter from '@/components/footer'
export default {
    name: 'login',
    data() {
        return {
            test: 0
        }
    },
    components: {
        appFooter
    }
}
</script>

<style scope lang="scss"></style>
