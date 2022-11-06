<template>
    <div>
        <div ref="box" class="box green"></div>
        <!-- <div class="box orange"></div>
        <div class="box grey"></div> -->
        <!-- <button @click="clickChange">Click</button> -->
    </div>
</template>


<style scoped lang="scss">
.box {
    width: 200px;
    height: 200px;
    display: inline-block;
    background-color: black;
}

.pink {
    background-color: pink;
}
</style>

<script setup lang="ts">

import { ref, onMounted } from 'vue'
const { $gasp } = useNuxtApp()
console.log($gasp)
// function clickChange (e: Event) {
//     console.log(e)
//     $gasp.to(box.value, {rotation: 27, x: 100, duration: 1});
// }
const box = ref<HTMLDivElement | null>(null)
onMounted(() => {
    let myTween = $gasp.to(box.value, {rotation: 27, x: 100, duration: 1});
})
</script>