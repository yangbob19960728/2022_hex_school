<template>
    <div>
        <div>
            <button @click="signMode = SignMode.creation">
                手寫簽名
            </button>
            <button @click="signMode = SignMode.history">
                匯入簽名檔
            </button>
        </div>
        <div v-if="signMode == SignMode.creation">
            <canvas ref="canvas" width="500" height="300" style="border: 1px solid #000"></canvas>
            <button @click="save">儲存</button>
            <button @click="reset">清除</button>
            <div>
                <button @click="printColor = PrintColor.red">red</button>
                <button @click="printColor = PrintColor.blue">blue</button>
                <button @click="printColor = PrintColor.black">black</button>
            </div>
        </div>
        <div v-if="signMode == SignMode.history">
            目前的簽名
            <div v-for="(sign, index) in signatureData">
                <img :src="sign.src" alt="" :data-time="sign.timestamp" @click="selectImage(sign.src)">
                <button @click="deleteSignature(index)">X</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const canvas = ref<HTMLCanvasElement>(null);
let context: CanvasRenderingContext2D;
const image = ref<HTMLImageElement>(null)
enum PrintColor {
    black,
    blue,
    red
}
const printColor = ref<PrintColor>(PrintColor.black);
interface Signatures {
    src: string,
    timestamp: number
}


const signatureData = ref<Signatures[]>(JSON.parse(localStorage.getItem("img")) || [])
enum SignMode {
    creation ,
    history
}
const signMode = ref<SignMode>(SignMode.creation)

onMounted(() => {
        context = canvas.value.getContext("2d");

        context.lineWidth = 4;
        context.lineCap = "round";
        // event listener 電腦板
        canvas.value.addEventListener("mousedown", printStart);

        // event listener 手機板
        canvas.value.addEventListener("touchstart", printStart);
})
// 取得滑鼠 / 手指在畫布上的位置
function getPaintPosition(e: MouseEvent | TouchEvent) {
    const canvasSize = canvas.value.getBoundingClientRect();

    if (e instanceof MouseEvent) {
        return {
            x: e.clientX - canvasSize.left,
            y: e.clientY - canvasSize.top,
        }

    } else {
        return {
            x: e.touches[0].clientX - canvasSize.left,
            y: e.touches[0].clientY - canvasSize.top,
        };
    }
}

function printStart(e: MouseEvent | TouchEvent) {
    e.preventDefault()
    context.beginPath();
    const { x, y } = getPaintPosition(e)
    context.moveTo(x, y);
    if (e instanceof MouseEvent) {
        canvas.value.addEventListener("mouseup", finishedPosition);
        canvas.value.addEventListener("mouseleave", finishedPosition);
        canvas.value.addEventListener("mousemove", draw);
    }
    else {
        canvas.value.addEventListener("touchend", finishedPosition);
        canvas.value.addEventListener("touchcancel", finishedPosition);
        canvas.value.addEventListener("touchmove", draw);
    }
}

function draw(e: MouseEvent | TouchEvent) {
    // 取得滑鼠 / 手指在畫布上的 x, y 軸位置位置
    const { x, y } = getPaintPosition(e);
    context.strokeStyle = PrintColor[printColor.value];
    // 移動滑鼠位置並產生圖案
    context.lineTo(x, y);
    context.stroke();
}

function finishedPosition(e: MouseEvent | TouchEvent) {
    context.beginPath();
    if (e instanceof MouseEvent) {
        canvas.value.removeEventListener("mouseup", finishedPosition);
        canvas.value.removeEventListener("mouseleave", finishedPosition);
        canvas.value.removeEventListener("mousemove", draw);

    }
    else {
        canvas.value.removeEventListener("touchend", finishedPosition);
        canvas.value.removeEventListener("touchcancel", finishedPosition);
        canvas.value.removeEventListener("touchmove", draw);
    }
}

// 重新設定畫布
function reset() {
    context.clearRect(0, 0, canvas.value.width, canvas.value.height);
}
function save() {
    const newImg = canvas.value.toDataURL("image/png");

    signatureData.value.push({
        src: newImg,
        timestamp: Date.now()
    })
    localStorage.setItem('img', JSON.stringify(signatureData.value))
    selectImage(newImg);
}

function deleteSignature(index: number) {
    signatureData.value.splice(index, 1)
}
const emit = defineEmits<{
  (e: 'update', value: string): void
}>()

function selectImage(value: string) {
    emit("update", value)
}

</script>