// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // ssr: false,
    app: {
        // pageTransition: { name: 'page', mode: 'out-in' },
        // layoutTransition: { name: 'layout', mode: 'out-in' }
    },
    typescript: {
        shim: false,
        typeCheck: true,  //類型檢查
        strict: true  // greater safety 

    },
    runtimeConfig: {
        // The private keys which are only available server-side
        apiSecret: '123',
        // Keys within public are also exposed client-side
        public: {
            apiBase: '/api'
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/_colors.scss" as *;'
                }
            }
        }
    }
})
