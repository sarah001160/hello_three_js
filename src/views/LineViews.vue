<script setup>
import { onMounted, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; //test 作用：讓你可以用滑鼠拖曳、滾輪縮放來控制相機繞著目標旋轉和平移。

const container = ref(null)
let renderer, scene, camera, controls

onMounted(() => {
  init()
})

function init() {
  // 建立場景
  scene = new THREE.Scene()

  // 建立相機
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 5

  // 建立渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.value.appendChild(renderer.domElement)

  // 建立控制器
  controls = new OrbitControls(camera, renderer.domElement)

  // 建立線條的幾何資料
  const points = []
  points.push(new THREE.Vector3(-1, 0, 0))
  points.push(new THREE.Vector3(0, 1, 0))
  points.push(new THREE.Vector3(1, 0, 0))

  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  const material = new THREE.LineBasicMaterial({ color: 0xffff00 })

  const line = new THREE.Line(geometry, material)
  scene.add(line)

  animate()

  window.addEventListener('resize', onResize)
}

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
</script>

<template>
  <div>
    <h1>Drawing Lines</h1>
    <a href="https://threejs.org/manual/#en/drawing-lines"
      target="_blank">https://threejs.org/manual/#en/drawing-lines</a>
    <div>
      <a href="https://threejs.org/manual/#en/primitives" target="_blank">基礎 原</a>
    </div>


    <div ref="container" class="three-container"></div>
  </div>
</template>

<style scoped>
.three-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
a {
  color: white;
}
a:hover {
  color: green
}
</style>
