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
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true, // 계단 현상 없이 부드럽게(성능 저하는 좀 있음)
});
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
camera.position.x = 1;
camera.position.y = 2;
camera.position.z = 5;
scene.add(camera);

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  // color: 0xff0000
  // color: '#ff0000'
  color: "red",
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// 그리기
renderer.render(scene, camera);
