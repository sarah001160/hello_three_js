import * as THREE from 'three';
import { scene, camera } from './scene/scene.js';

let renderer;
let cube;

// 初始化
function init() {
  renderer = new THREE.WebGLRenderer(); // 使用 WebGL 渲染器
  renderer.setSize(window.innerWidth, window.innerHeight); // 設定渲染器大小
  document.body.appendChild(renderer.domElement); // 將渲染器的 DOM 元素加到 body

  // 貼圖
  const loader = new THREE.TextureLoader(); // 貼圖載入器
  const texture = loader.load('/assets/wall.jpg'); // 載入貼圖
  texture.colorSpace = THREE.SRGBColorSpace; // 設定顏色空間

  // 物件
  const geometry = new THREE.BoxGeometry(1, 1, 1); // 建立立方體幾何體
  const material = new THREE.MeshBasicMaterial({ // 使用基本材質
    color: 0x00ff00,
    map: texture,
  });
  cube = new THREE.Mesh(geometry, material); // 建立網格物件
  scene.add(cube);

  // 啟動動畫迴圈
  renderer.setAnimationLoop(animate);
}

function animate() {
  cube.rotation.x += 0.01; // 旋轉立方體
  cube.rotation.y += 0.01; // 旋轉立方體
  renderer.render(scene, camera); // 渲染場景
}
animate();

export { init };
