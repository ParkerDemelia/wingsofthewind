import * as THREE from 'three';
import { setupMenu } from './menu.js';
import { loadMap } from './maps.js';
import { updateGlider } from './physics.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('game-container').appendChild(renderer.domElement);

// Glider (simple placeholder model)
const gliderGeometry = new THREE.BoxGeometry(2, 0.1, 1); // Replace with a proper model later
const gliderMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const glider = new THREE.Mesh(gliderGeometry, gliderMaterial);
scene.add(glider);

// Global state
let currentMap = null;
let graphicsLevel = 'medium';

// Menu interaction
setupMenu((map, graphics) => {
  currentMap = map;
  graphicsLevel = graphics;
  loadMap(scene, map, graphics);
  document.getElementById('menu').style.display = 'none';
  animate();
});

// Camera follows glider
camera.position.set(0, 5, 10);
camera.lookAt(glider.position);

// Game loop
function animate() {
  requestAnimationFrame(animate);
  updateGlider(glider); // Physics for movement
  renderer.render(scene, camera);
}

// Resize handler
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});