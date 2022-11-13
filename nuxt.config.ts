// https://v3.nuxtjs.org/api/configuration/nuxt.config
const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
const baseURL = process.env.NUXT_APP_DEPLOY_ENV === 'GH_PAGES' ? "/2022_hex_school/" : "/"
export default defineNuxtConfig({
    //https://github.com/nuxt/framework/issues/7769#issuecomment-1255599657
    experimental: {
        payloadExtraction: false
    },
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
        },
        build: {
            rollupOptions: {
                output: {
                    //issue https://github.com/vitejs/vite/issues/9119
                    // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
                    sanitizeFileName(name) {
                        const match = DRIVE_LETTER_REGEX.exec(name);
                        const driveLetter = match ? match[0] : '';
                        return (
                            driveLetter +
                            name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
                        );
                    },
                },
            },
        },
    }
})
