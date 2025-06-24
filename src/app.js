import * as THREE from 'three';
import { scene, camera } from './scene/scene.js';

let renderer;
let cube;

function init() {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // 貼圖
  const loader = new THREE.TextureLoader();
  const texture = loader.load('/assets/wall.jpg');
  texture.colorSpace = THREE.SRGBColorSpace;

  // 物件
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    map: texture,
  });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // 啟動動畫迴圈
  renderer.setAnimationLoop(animate);
}

function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

export { init };
