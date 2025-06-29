<script setup>
import * as THREE from 'three'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import wallImg from '@/assets/wall.jpg';

const container = ref(null); // DOM元素有標記 ref="container"
let renderer, cube

// 場景 + 相機
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  700
)
camera.position.z = 3

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value.appendChild(renderer.domElement)

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
