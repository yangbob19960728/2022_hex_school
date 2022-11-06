<template>
    <div>
        <Header />
        <slot />

        <LazyFooter v-if="show"/>
        <!-- <AppFooter /> -->
        <button v-if="!show" @click="show = true">Show List</button>
    </div>
</template>

<script setup>
    const show = ref(false);
</script>