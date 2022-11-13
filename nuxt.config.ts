// https://v3.nuxtjs.org/api/configuration/nuxt.config
// const runtimeConfig = useRuntimeConfig()
const baseURL = process.env.NUXT_APP_DEPLOY_ENV === 'GH_PAGES' ? "/2022_hex_school/": "/"
export default defineNuxtConfig({
    app: {
        // pageTransition: { name: 'page', mode: 'out-in' },
        // layoutTransition: { name: 'layout', mode: 'out-in' }
        baseURL: baseURL,
        buildAssetsDir: "nuxt",
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
    css: [
        '@/assets/scss/main.scss'
    ],
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
