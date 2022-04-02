import * as THREE from '../third_party/three/build/three.module.js';

const params = {
  aspectRatio: 0,
  fov: 0,
}

const camarePosition = {
  x: 0,
  y: 0,
  z: 100,
}

const globalItems = {
  scene: null,
  camera: null,
  renderer: null,
}

const LIGHT_COLOR = '0xffffff';
const LIGHT_INTENSITY = 1.00;
const TEXT_SIZE = 8;
const TEXT = '祝';

function initialize() {
  initScene();
  initCamera();
  initRenderer();
  const light = initLight();
  const container = init3DObjects();
  globalItems.scene.add(light, container);
  window.addEventListener('resize', update);

  beginRender();
};

function initScene() {
  const scene = new THREE.Scene();
  params.aspectRatio = window.innerWidth / window.innerHeight;
  params.pov = 60;
  globalItems.scene = scene;
}

function initCamera() {
  const camera = new THREE.PerspectiveCamera(params.fov, params.aspectRatio, 0.1, 1000);
  camera.position.x = camarePosition.x;
  camera.position.y = camarePosition.y;
  camera.position.z = camarePosition.z;
  camera.lookAt(globalItems.scene.position);

  globalItems.camera = camera;
}

function initRenderer() {
  const renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  document.getElementById('render').appendChild(renderer.domElement);

  globalItems.renderer = renderer;
}

function initLight(x, y, z) {
  const light = new THREE.DirectionalLight(LIGHT_COLOR, LIGHT_INTENSITY);
  light.position.set(x, y, z);

  return light;
}

function init3DObjects() {
  const container = new THREE.Object3D();
  initTextModel(container);
  return container;
}

function initTextModel(container) {
  const fontLoader = new THREE.FontLoader();
  fontLoader.load(
    '../third_party/three/examples/fonts/helvetiker_regular.typeface.json',
    function(font) {
      generateTextGeometory(font, container);
    }
  );
}

function generateTextGeometory(font, container) {
  const textGeometry = new THREE.TextGeometry(TEXT, {
    font: font,
    size: TEXT_SIZE,
    height: 1,
    curveSegment: 1
  });

  textGeometry.center();

  const material = new THREE.MeshToonMaterial({ color: 0xdd5555 });
  const textMesh = new THREE.Mesh(textGeometry, material);
  const vector = new THREE.Vector3();

  textMesh.lookAt(vector);
  container.add(textMesh);
}

function beginRender() {
  const { scene, camera } = globalItems;
  globalItems.renderer.render(scene, camera);
}

function update() {
  globalItems.camera.fov = params.fov;
  globalItems.camera.aspect = params.aspectRatio;
  globalItems.camera.updateProjectionMatrix();
  globalItems.renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('load', initialize);
