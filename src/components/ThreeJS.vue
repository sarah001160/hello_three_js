<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; //test作用：讓你可以用滑鼠拖曳、滾輪縮放來控制相機繞著目標旋轉和平移。
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; //test 作用：用來載入 .gltf 或 .glb 格式的 3D 模型。
import { onMounted, onBeforeUnmount, ref } from 'vue';
import wallImg from '@/assets/wall.jpg';

const container = ref(null); // DOM元素有標記 ref="container"
let renderer, cube, controls;

// 場警 + 相機
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,  // 視角
  window.innerWidth / window.innerHeight, // 長寬比
  0.1, // 近剪裁面，相機多近前開始渲染，這個距離內物體不顯示
  700 // 遠剪裁面，相機最遠能看到多遠，超過這距離物體不顯示
)
camera.position.z = 3

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true}); // 建立 WebGL 渲染器，開啟抗鋸齒功能，看起來平滑
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value.appendChild(renderer.domElement)

  // 控制器，讓你用滑鼠操作視角
  controls = new OrbitControls(camera, renderer.domElement);

  // 貼圖
  const loader = new THREE.TextureLoader()
  const texture = loader.load(wallImg)
  // const texture = loader.load('@/assets/wall.jpg')// 改用import才能使用src內的圖片，靜態的請放在public資料夾
  texture.colorSpace = THREE.SRGBColorSpace

  // 方塊
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 'red', map: texture })
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  // --- 新增 GLB 模型載入 ---
  const gltfLoader = new GLTFLoader();

  gltfLoader.load(
    '/models/untitled.glb', // <-- 改成你放置的 glb 路徑
    // untitle.glb 是blender猴子模型，輸出前有做file設定，可成功顯示在three.js專案
    (gltf) => {
      const model = gltf.scene;

      // 調整大小 / 位置 / 旋轉
      model.scale.set(1, 1, 1);
      model.position.set(0,0, 0);

      scene.add(model);
    
    },
    (xhr) => {
      console.log(`GLB 載入進度: ${(xhr.loaded / xhr.total * 100).toFixed(1)}%`);
    },
    (error) => {
      console.error('GLB 載入失敗', error);
    }
  );

  //test
  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  scene.add(hemi);

  const dir = new THREE.DirectionalLight(0xffffff, 1);
  dir.position.set(5, 10, 7);
  scene.add(dir);

  //---


  // 開始動畫
  renderer.setAnimationLoop(animate)

  // resize 畫面調整
  window.addEventListener('resize', onResize)
}

function animate() {
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// 初始化，只出現一次
onMounted(() => {
  init()
})

//銷毀之前
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);//移除監聽
  renderer?.dispose(); // dispose() 用來釋放 WebGL 資源，例如 GPU 記憶體、?用來確認非 null 或 undefined
})
</script>

<template>
  <div>
    <div ref="container" class="container"></div>
  </div>

</template>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
