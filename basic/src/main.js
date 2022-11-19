import * as THREE from "three";

console.log(THREE);

// 동적으로 캔버스 조립
// const renderer = new THREE.WebGLRenderer(); // 렌더러 만들기
// renderer.setSize(window.innerWidth, window.innerHeight);
// console.log(renderer.domElement);
// document.body.appendChild(renderer.domElement);

// html에서 캔버스 가져와서 사용
const canvas = document.querySelector("#three-canvas");
// const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75, // 시야각
  window.innerWidth / window.innerHeight,
  0.1, // near
  1000 // far
);
camera.position.z = 5;
scene.add(camera);
