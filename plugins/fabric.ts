import { fabric } from "fabric";
export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            fabric: fabric
        }
    }
})