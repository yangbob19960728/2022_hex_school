<template>
    <div>
        <!-- <NuxtWelcome /> -->
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <Apple>
            This is an auto-imported component.
        </Apple>
        <img src="~/public/img/cat1.jpg" alt="Discover Nuxt 3" />
        <img src="~/assets/img/cat2.jpg" alt="Discover Nuxt 3" />
        <!-- This renders the "span" element on the server side -->
        <ClientOnly fallbackTag="span">
            <Apple>
                client side render apple.
            </Apple>
            <!-- this component will only be rendered on client side -->
            <template #fallback>
                <!-- this will be rendered on server side -->
                <p>Loading comments...</p>
            </template>
        </ClientOnly>
    </div>
</template>