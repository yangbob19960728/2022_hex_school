<template>
    <div class="competition2">
        <div>
            <button>
                <label for="fileInput">選擇檔案</label>
                <input type="file" accept=".pdf, .jpg" id="fileInput" @change="changeFile">
            </button>
            <div>
                或拖移檔案到此處
            </div>
            <div>
                (限10MB 內的PDF或JPG檔)
            </div>
        </div>
        <div>
            <canvas style="border: 1px solid #000" ref="canvas" id="canvas"> </canvas>
        </div>
        <div v-if="isCanSaveFile">
            <button @click="downloadImage">下載檔案</button>
        </div>
        <div v-if="isAddSign" class="sign">
            <ClientOnly>
                <Signature @update="setImage"></Signature>
            </ClientOnly>
        </div>
    </div>
</template>
<style lang="scss">
.sign {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #F0F0F0;
}
</style>

<script setup lang="ts">

import { ref, onMounted, Ref } from 'vue'
import { fabric } from "fabric";

const canvas = ref<HTMLCanvasElement>(null)
const isAddSign = ref<boolean>(false)
const { $fabric, $pdfjsLib, $jsPDF } = useNuxtApp()
let fabricCanvas: fabric.Canvas
let fileName: string

useHead({
    title: "六角比賽第二周",
})

definePageMeta({
    layout: "no-layout",
});

const readBlob = (blob: Blob) => new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result as ArrayBuffer));
    reader.addEventListener("error", reject);
    reader.readAsArrayBuffer(blob);
});


const printPDF = async (pdfData: File): Promise<HTMLCanvasElement> => {

    // 將檔案處理成 ArrayBuffer
    let newPdfData: ArrayBuffer = await readBlob(pdfData);

    // // 傳入ArrayBuffer，並載入 PDF 檔及第一頁
    const pdfDoc = await $pdfjsLib.getDocument(newPdfData).promise;

    const pdfPage = await pdfDoc.getPage(pdfDoc._pdfInfo.numPages);

    // // 設定尺寸及產生 canvas
    const viewport = pdfPage.getViewport({ scale: window.devicePixelRatio });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // // 設定 PDF 所要顯示的寬高及渲染
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderContext = {
        canvasContext: context,
        viewport,
    };
    const renderTask = pdfPage.render(renderContext);

    // 回傳做好的 PDF canvas
    return renderTask.promise.then(() => canvas);
    // return new Promise(() => {}).then(() => canvas);
}

const pdfToImage = async (pdfData: HTMLCanvasElement): Promise<fabric.Image> => {

    // 設定 PDF 轉為圖片時的比例
    const scale = 1 / window.devicePixelRatio;

    // 回傳圖片
    return new $fabric.Image(pdfData, {
        scaleX: scale,
        scaleY: scale,
    });
}


const isCanSaveFile = ref<boolean>(false);

async function changeFile(e: Event) {

    fabricCanvas.requestRenderAll();
    fileName = (e.target as HTMLInputElement).files[0].name;
    const pdfData = await printPDF((e.target as HTMLInputElement).files[0]);

    const pdfImage = await pdfToImage(pdfData);
    // // 透過比例設定 canvas 尺寸
    fabricCanvas.setWidth(pdfImage.width / window.devicePixelRatio);
    fabricCanvas.setHeight(pdfImage.height / window.devicePixelRatio);

    // // 將 PDF 畫面設定為背景
    fabricCanvas.setBackgroundImage(pdfImage, fabricCanvas.renderAll.bind(fabricCanvas));
    isAddSign.value = true;
}




onMounted(() => {
    // 此處 canvas 套用 fabric.js
    fabricCanvas = new $fabric.Canvas(canvas.value);
})

function setImage(value: string) {
    isAddSign.value = false
    $fabric.Image.fromURL(value, function (image) {

        // 設定簽名出現的位置及大小，後續可調整
        image.top = 400;
        image.scaleX = 0.5;
        image.scaleY = 0.5;
        fabricCanvas.add(image);
    });
    isCanSaveFile.value = true
}

function downloadImage () {
    const pdf = new $jsPDF();
    // 將 canvas 存為圖片
    const image = fabricCanvas.toDataURL({format: "png"});
    
    // 設定背景在 PDF 中的位置及大小
    const width = pdf.internal.pageSize.width;
    const height = pdf.internal.pageSize.height;
    pdf.addImage(image, "png", 0, 0, width, height);

    // 將檔案取名並下載
    pdf.save(fileName);
}
</script>