<template>
    <div>
        <canvas ref="canvas"></canvas>
    </div>
</template>


<style lang="scss" scoped>
canvas {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    pointer-events: none;
    z-index: 1000;
}
</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface ParticleItem {
    p?: Vec2
    v?: Vec2
    color?: string
    scale?: number
}

class Particle implements ParticleItem {
    constructor (options: ParticleItem) {
        this.lifeSpan = 10
        this.p = options.p || new Vec2()
        this.v = options.v || new Vec2(0,0)
        this.color = options.color ||"#fff"
        this.scale = options.scale || 1
    }
    p: Vec2
    v: Vec2
    scale: number
    color: string
    lifeSpan: number
    draw(ctx: CanvasRenderingContext2D) {
        ctx.textAlign = "center";
        ctx.font = "21px serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#" + Math.floor(Math.random()*16777215).toString(16)
        ctx.save();
        ctx.translate(this.p.x, this.p.y)
        ctx.fillText("✦", 
            0 ,
            0,
        )
        ctx.restore()
    }
    update () {
        this.p = this.p.add(this.v)
        this.scale = this.scale * 0.3;
        this.lifeSpan = this.lifeSpan - 1
    }
}

class Vec2 {
    constructor(x: number = 0, y: number = 0) {
        this.x = x
        this.y = y
    }
    x: number
    y: number
    set(x: number, y: number) {
        this.x = x
        this.y = y
    }
    add(v: Vec2) {
        return new Vec2(this.x + v.x, this.y + v.y)
    }
    clone() { 
        return new Vec2(this.x, this.y) 
    }
    distance (v1: Vec2): number {
        return Math.hypot(
            this.x - v1.x,
            this.y - v1.y
        );
    }
}

const canvas = ref<HTMLCanvasElement>(null);
let context: CanvasRenderingContext2D, animationFrame: number;
let windowWidth: number;
let windowHeight: number;
let mousePos = new Vec2(0, 0);
let mouseLastPos = new Vec2(0, 0);
let mousePosDown = new Vec2(0, 0);
let particles: Particle[] = [];
const updateFPS: number = 30;

function initCanvas() {
    windowWidth = canvas.value.width = window.innerWidth
    windowHeight = canvas.value.height = window.innerHeight
    context = canvas.value.getContext("2d")
}

function onMousemove(e: MouseEvent): void {
    mousePos.set(e.x, e.y);
    if (mousePos.distance(mouseLastPos) > 1.5) {
        particles.push(new Particle({
            p: mousePos.clone()
        }))
    }
    mouseLastPos = mousePos.clone();
}
function onMousedown(e: MouseEvent) {
    mousePosDown.set(e.x, e.y);
    const angle = 30;
    for (let i = 0; i < 360 / angle; i++) {
        let x: number = Number(Math.cos(angle * i * Math.PI / 180).toFixed(3));
        let y: number = Number(Math.sin(angle * i * Math.PI / 180).toFixed(3));
        particles.push(new Particle({
            p: mousePosDown.clone(),
            v: new Vec2(x * 5,y * 5)
        }))
    }
}

function bindEvent() {
    //縮放事件
    window.addEventListener("resize", initCanvas)
    window.addEventListener("mousemove", onMousemove)
    window.addEventListener("mousedown", onMousedown)
}

function update() {
    particles.forEach((item) => {
        item.update()
    })
    particles = particles.filter((item) => item.lifeSpan > 0)
}

function draw() {
    //清空背景
    context.clearRect(0, 0, windowWidth, windowHeight)

    //畫圖
    particles.forEach(p => {
        p.draw(context)
    })

    window.requestAnimationFrame(draw)
}

onMounted(() => {
    initCanvas()
    bindEvent();
    animationFrame = window.requestAnimationFrame(draw)
    setInterval(update, 1000 / updateFPS)
})

onUnmounted(() => {
    cancelAnimationFrame(animationFrame);
    window.removeEventListener("mousemove", onMousemove);
    window.removeEventListener("resize", initCanvas);
    window.removeEventListener("mousedown", onMousedown)
})
</script>