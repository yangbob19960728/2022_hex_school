import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

export default defineNuxtPlugin(nuxtApp => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    return {
        provide: {
            gsap: gsap
        }
    }
})