// scene.js 處理場景與動畫
// 引入 three.js
import * as THREE from 'three';
const scene = new THREE.Scene();

// 場景
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);


export { scene, camera }