<template>
    <LayoutsHeader />
    <main class="AppMain">
        <RouterView />
    </main>
    <CommonSubscribe />
    <LayoutsFooter />
</template>

<script setup>
import { RouterView } from 'vue-router'
import LayoutsHeader from '@/components/layouts/header.vue'
import CommonSubscribe from '@/components/common/subscribe.vue'
import LayoutsFooter from '@/components/layouts/footer.vue'
</script>

<style lang="less">
@r: .App;
body {
    .ffGilroyRegualr();
}

ul {
    list-style: none;
}

a {
    color: @gray-2;
    .ffGilroyMedium();
    
    &:hover {
        text-decoration: none;
    }
}

input {
    user-select: none;
}

@{r} {
    &Main {
        padding-top: 60px;

        @media @m-mobile {
            padding-top: 141px;
        }
    }
}
</style>
