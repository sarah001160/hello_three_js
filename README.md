# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).



## 版本號
```json
"three": "^0.168.0",
"vue": "^3.4.37"
```


建議模組化分類檔案，專案架構長相:
```chasrp

my-threejs-project/
├── public/                  # 靜態資源 (圖片、模型等)
│   └── assets/
│       └── wall.jpg
├── src/
│   ├── main.js              # 程式入口點
│   ├── style.css            # 全域樣式
│   ├── scene/               # 場景設定模組
│   │   └── scene.js
│   ├── camera/              # 相機模組（可選）
│   │   └── camera.js
│   ├── objects/             # 幾何物件或模型匯入模組
│   │   └── cube.js
│   ├── renderer/            # 渲染器設定（可選）
│   │   └── renderer.js
│   ├── animation/           # 動畫處理（可選）
│   │   └── animate.js
│   ├── controls/            # 控制器設定（可選，例如 OrbitControls）
│   │   └── controls.js
│   └── utils/               # 工具函式（可選）
│       └── resize.js
├── package.json
└── index.html

```


## 認識 THREE JS
待研究、帶補充

## 如何將功能拆開來，模組化? 可重複使用?
待研究~
拆成三個主要部分
1. ThreeRenderer.vue （負責建立 renderer 和 mount canvas）


## vite建構
vite建構vue
安裝THREE.js
安裝sass (dart.sass vite、vue使用這版)
`npm install -D sass`