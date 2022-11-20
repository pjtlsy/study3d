import * as THREE from "three";

// 주제: Light 조명

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
  // camera.position.x = 1;
  // camera.position.y = 2;
  camera.position.z = 5;
  camera.lookAt(0, 0, 0);
  camera.zoom = 0.5; // 줌 아웃 같은거 하려면
  camera.updateProjectionMatrix();
  scene.add(camera);

  // DirectionalLight <- 태양빛같은
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.x = 1;
  light.position.z = 2;
  scene.add(light);

  // Mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  // MeshBasicMaterial은 빛에 영향 안받는애
  const material = new THREE.MeshStandardMaterial({
    // color: 0xff0000
    // color: '#ff0000'
    color: "red",
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 그리기
  const clock = new THREE.Clock();
  function draw() {
    // console.log(clock.getElapsedTime());  // 성능 상관없이 절대 시간
    // const time = clock.getElapsedTime();
    const delta = clock.getDelta();

    // 각도는 Radian을 사용
    // 360도는 2파이
    // mesh.rotation.y += 0.1;
    // mesh.rotation.y += THREE.MathUtils.degToRad(1);
    mesh.rotation.y += 2 * delta;
    mesh.position.y += delta;
    // mesh.position.y = time;
    if (mesh.position.y > 3) {
      mesh.position.y = 0;
    }
    renderer.render(scene, camera);

    // window.requestAnimationFrame(draw);
    renderer.setAnimationLoop(draw); // AI, VR 컨텐츠 만들 땐 이거 써야함
  }

  function setSize() {
    // 카메라
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  // 이벤트
  window.addEventListener("resize", setSize);

  draw();
}
