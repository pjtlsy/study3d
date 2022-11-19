import * as THREE from "three";

console.log(THREE);

// 동적으로 캔버스 조립
// const renderer = new THREE.WebGLRenderer(); // 렌더러 만들기
// renderer.setSize(window.innerWidth, window.innerHeight);
// console.log(renderer.domElement);
// document.body.appendChild(renderer.domElement);

const canvas = document.querySelector("#three-canvas");
// const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
