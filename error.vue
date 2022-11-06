<template>
    <div>
        目前網站出現錯誤
    </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})
console.log(props)
const handleError = () => clearError({ redirect: '/' })
</script>