<template>
    <div>
        <div ref="lottieElement"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { AnimationConfig } from "lottie-web";
const { $lottie } = useNuxtApp()
const lottieElement = ref<HTMLDivElement | null>(null);

interface Props {
    options?: Partial<AnimationConfig>
}
const props = defineProps<Props>()

onMounted(() => {
    let defaultOptions: AnimationConfig = {
        container: lottieElement.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
    }
    const lottieOptions: AnimationConfig = Object.assign(defaultOptions, props.options)
    $lottie.loadAnimation(lottieOptions)
})

</script>