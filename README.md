
## 專案運行方式

```bash
npm install
```
## 運行開發環境 
```bash
npm run dev
```

Start the development server on http://localhost:3000

## 生產環境

```bash
npm run build
```

## 資料夾
- page資料夾 - 頁面元件放置區，這次做的部分是 hexCompetition1.vue
- plugin資料夾 - 裡面有Gsap和lottie這兩個第三方的套件，在plugin去註冊，就可以讓元件使用，使用方式是
```js
const { $gsap, $lottie } = useNuxtApp();
//使用會有'$'
```
- components - 放元件，這次做的部分是starCursorEffect.vue
- assets - 存放圖片和scss
- public - 存放資料，這次做的部分是用data裡面的json檔來製作動畫

## 使用技術
- Nuxt3
- Vue3
- Typescript
- SCSS
- Canvas

## 第三方服務
- GSAP
- lottie