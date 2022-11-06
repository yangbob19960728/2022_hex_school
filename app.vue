<template>
  <div id="bob">
    <NuxtLayout>
      
      <NuxtPage />

    </NuxtLayout>

  </div>
</template>
<script setup>

const runtimeConfig = useRuntimeConfig()
// console.log(runtimeConfig)
const appConfig = useAppConfig()
// console.log(appConfig)

</script>

<style lang="scss">
#bob {
  background-color: $secondary;
}

// .page-enter-active,
// .page-leave-active {
//   transition: all 0.4s;
// }

// .page-enter-from,
// .page-leave-to {
//   opacity: 0;
//   filter: blur(1rem);
// }
</style>