import * as THREE from "three";

// 주제: 배경의 색, 투명도 설정

export default function example() {
  console.log(THREE);
  // Renderer

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
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  console.log(window.devicePixelRatio);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  // renderer.setClearAlpha(0.5);
  // renderer.setClearColor(0x00ff00);
  renderer.setClearColor("#00ff00");
  renderer.setClearAlpha(0.5);

  // Scene
  const scene = new THREE.Scene();
  // Scene에 직접 칠한 색은 Renderer 덮어씀
  scene.background = new THREE.Color("blue");

  // Camera
  // const camera = new THREE.PerspectiveCamera(
  //   75, // 시야각
  //   window.innerWidth / window.innerHeight,
  //   0.1, // near
  //   1000 // far
  // );
  // camera.position.x = 1;
  // camera.position.y = 2;
  // camera.position.z = 5;

  // Orthographic Camera(직교 카메라)
  const camera = new THREE.OrthographicCamera(
    -(window.innerWidth / window.innerHeight), // left
    window.innerWidth / window.innerHeight, // right
    1, // top
    -1, // bottom
    0.1,
    1000
  );
  camera.position.x = 1;
  camera.position.y = 2;
  camera.position.z = 5;
  camera.lookAt(0, 0, 0);
  camera.zoom = 0.5; // 줌 아웃 같은거 하려면
  camera.updateProjectionMatrix();
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

  function setSize() {
    // 카메라
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  // 이벤트
  window.addEventListener("resize", setSize);
}
