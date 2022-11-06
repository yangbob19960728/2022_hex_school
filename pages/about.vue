<template>
    <section>
        <!-- <p>This page will be displayed at the /about route.</p>
        <p v-if="data">
            Page visits: {{ data }}
        </p>
        <p v-else>
            Loading
        </p> -->
        <!-- <div>
            <button onclick="previous()">前一頁</button>
            page: {{ page }}
            <button onclick="next()">下一頁</button>
        </div> -->
        <h1>{{ organization.login }}</h1>
        <p>{{ organization.description }}</p>
    </section>
</template>

<script setup>
// defineComponent({
    const [{ data: organization }, { data: repos }] = await Promise.all([
      useFetch(`https://api.github.com/orgs/nuxt`),
      useFetch(`https://api.github.com/orgs/nuxt/repos`)
    ])
// })
// const { data } = await useFetch('/api/count')
// console.log(data)
// watch(data, (newData) => {
//     console.log(newData);
//     debugger
// })


// const page = ref(1);
// const { data: users, pending, refresh, error } = await useFetch(() => `users?page=${page.value}&take=6`, { baseURL: config.API_BASE_URL }
// );
// function previous() {
//     page.value--;
//     refresh();
// }
// function next() {
//     page.value++;
//     refresh();
// }

</script>