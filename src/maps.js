import * as THREE from 'three';

export function loadMap(scene, mapName, graphics) {
  // Clear previous map
  while (scene.children.length > 1) scene.remove(scene.children[1]);

  // Ground (basic terrain)
  const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
  let groundMaterial;

  if (graphics === 'low') {
    groundMaterial = new THREE.MeshBasicMaterial({ color: mapName === 'rio' ? 0x00ff00 : 0xffffff });
  } else if (graphics === 'medium') {
    groundMaterial = new THREE.MeshLambertMaterial({ color: mapName === 'rio' ? 0x00cc00 : 0xdddddd });
  } else {
    groundMaterial = new THREE.MeshPhongMaterial({ color: mapName === 'rio' ? 0x009900 : 0xcccccc, shininess: 50 });
  }

  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  // Lighting based on graphics
  if (graphics !== 'low') {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 10, 5);
    scene.add(light);
  }

  // Add map-specific features (placeholders)
  if (mapName === 'rio') {
    const christGeometry = new THREE.BoxGeometry(5, 10, 5); // Christ the Redeemer stand-in
    const christ = new THREE.Mesh(christGeometry, new THREE.MeshBasicMaterial({ color: 0xaaaaaa }));
    christ.position.set(50, 5, 0);
    scene.add(christ);
  } else if (mapName === 'alps') {
    const peakGeometry = new THREE.ConeGeometry(10, 20, 32);
    const peak = new THREE.Mesh(peakGeometry, new THREE.MeshBasicMaterial({ color: 0x888888 }));
    peak.position.set(-20, 10, 0);
    scene.add(peak);
  }
}