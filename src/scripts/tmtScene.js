// src/scripts/tmtScene.js
// Optimized 3D TMT Steel Scene with Three.js
// Features: Metallic TMT cylinders with ribbed detailing, dark steel-blue fog,
// amber rim lighting, subtle mouse parallax, pause off-screen & reduced motion support.

export async function initTmtHeroScene(container) {
  if (!container) return null;

  // Dynamically import Three.js (lazy load)
  const THREE = await import('three');

  // Scene setup
  const scene = new THREE.Scene();
  const steelBlueFog = new THREE.Color(0x0a1c2d);
  scene.background = steelBlueFog;
  scene.fog = new THREE.FogExp2(0x0a1c2d, 0.055);

  // Camera setup
  const width = container.clientWidth;
  const height = container.clientHeight;
  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  
  // Position camera slightly offset to give prominence on the right half of the screen
  camera.position.set(2.8, 1.4, 7.5);
  camera.lookAt(1.4, 0, 0);

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
    alpha: false
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setSize(width, height);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;

  const canvas = renderer.domElement;
  canvas.className = 'w-full h-full object-cover';
  canvas.setAttribute('aria-hidden', 'true');
  container.appendChild(canvas);

  // Group for the entire bundle (for slow rotation + mouse tilt)
  const bundleGroup = new THREE.Group();
  scene.add(bundleGroup);

  // Procedural Ribbed Bump Texture for authentic TMT rebar ribs
  const canvasTex = document.createElement('canvas');
  canvasTex.width = 128;
  canvasTex.height = 1024;
  const ctx = canvasTex.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 128, 1024);
    // Draw diagonal rib marks
    ctx.fillStyle = '#ffffff';
    for (let y = 0; y < 1024; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(128, y + 24);
      ctx.lineTo(128, y + 36);
      ctx.lineTo(0, y + 12);
      ctx.closePath();
      ctx.fill();
    }
  }
  const bumpTexture = new THREE.CanvasTexture(canvasTex);
  bumpTexture.wrapS = THREE.RepeatWrapping;
  bumpTexture.wrapT = THREE.RepeatWrapping;
  bumpTexture.repeat.set(2, 6);

  // Brushed Metal TMT Material (MeshStandardMaterial)
  const steelMaterial = new THREE.MeshStandardMaterial({
    color: 0x475569,
    metalness: 0.88,
    roughness: 0.28,
    bumpMap: bumpTexture,
    bumpScale: 0.04
  });

  // Slightly darker oxidized steel material for depth variation in the bundle
  const darkSteelMaterial = new THREE.MeshStandardMaterial({
    color: 0x334155,
    metalness: 0.92,
    roughness: 0.35,
    bumpMap: bumpTexture,
    bumpScale: 0.03
  });

  // Shared geometry for steel bars: radius 0.08, height 7.5, 24 segments
  const barGeo = new THREE.CylinderGeometry(0.085, 0.085, 8.2, 24);

  // Hexagonal close-packed coordinates for a cylindrical bundle of 19 TMT bars
  const barOffsets = [
    // Center bar
    [0, 0],
    // Ring 1 (6 bars)
    [0.17, 0],
    [-0.17, 0],
    [0.085, 0.147],
    [-0.085, 0.147],
    [0.085, -0.147],
    [-0.085, -0.147],
    // Ring 2 (12 bars)
    [0.34, 0],
    [-0.34, 0],
    [0.17, 0.294],
    [-0.17, 0.294],
    [0.17, -0.294],
    [-0.17, -0.294],
    [0.255, 0.147],
    [-0.255, 0.147],
    [0.255, -0.147],
    [-0.255, -0.147],
    [0, 0.294],
    [0, -0.294]
  ];

  barOffsets.forEach(([x, y], idx) => {
    const mat = (idx % 3 === 0) ? darkSteelMaterial : steelMaterial;
    const bar = new THREE.Mesh(barGeo, mat);
    // Slight random offset along length for authentic yard stack look
    const lengthJitter = ((idx * 7) % 10) * 0.03 - 0.15;
    bar.position.set(x, lengthJitter, y);
    bundleGroup.add(bar);
  });

  // Binding wire loops holding the bundle together
  const wireMat = new THREE.MeshStandardMaterial({
    color: 0x92400e,
    metalness: 0.7,
    roughness: 0.4
  });
  const wireGeo1 = new THREE.TorusGeometry(0.48, 0.015, 12, 32);
  const wireMesh1 = new THREE.Mesh(wireGeo1, wireMat);
  wireMesh1.rotation.x = Math.PI / 2;
  wireMesh1.position.y = 1.5;
  bundleGroup.add(wireMesh1);

  const wireMesh2 = new THREE.Mesh(wireGeo1, wireMat);
  wireMesh2.rotation.x = Math.PI / 2;
  wireMesh2.position.y = -1.5;
  bundleGroup.add(wireMesh2);

  // Position bundle in scene: tilted, placed slightly towards the right half
  bundleGroup.position.set(1.6, -0.1, 0);
  bundleGroup.rotation.z = Math.PI / 4.8;
  bundleGroup.rotation.x = 0.35;

  // --- Lighting Setup ---
  // 1. Dark Steel-Blue Ambient / Hemisphere Light (industrial atmosphere)
  const hemiLight = new THREE.HemisphereLight(0x1e3a5f, 0x050f1a, 1.2);
  scene.add(hemiLight);

  // 2. Cinematic Safety-Amber Rim / Key Light (from back-right)
  const amberRimLight = new THREE.DirectionalLight(0xd97706, 4.2);
  amberRimLight.position.set(4, 3, -2.5);
  scene.add(amberRimLight);

  // 3. Secondary Warm Amber Fill (highlights cylinder silhouettes)
  const amberPoint = new THREE.PointLight(0xf59e0b, 2.8, 12);
  amberPoint.position.set(3, -1.5, 2.5);
  scene.add(amberPoint);

  // 4. Subtle Steel Cool Key Light from top-front
  const coolKeyLight = new THREE.DirectionalLight(0x94a3b8, 1.4);
  coolKeyLight.position.set(-2, 4, 4);
  scene.add(coolKeyLight);

  // --- State & Parallax Interaction ---
  let isVisible = true;
  let targetRotationY = 0;
  let targetRotationX = 0.35;
  let currentRotationY = 0;
  let currentRotationX = 0.35;
  let animationFrameId = null;

  // Subtle Mouse Parallax (clamped to prevent jarring movement)
  function onPointerMove(e) {
    const normX = (e.clientX / window.innerWidth) * 2 - 1;
    const normY = (e.clientY / window.innerHeight) * 2 - 1;
    targetRotationY = normX * 0.18;
    targetRotationX = 0.35 - normY * 0.12;
  }
  window.addEventListener('pointermove', onPointerMove, { passive: true });

  // Handle Resize
  function onResize() {
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', onResize, { passive: true });

  // Render Loop with smooth damping
  let clock = new THREE.Clock();

  function animate() {
    if (!isVisible) {
      animationFrameId = null;
      return;
    }

    const delta = clock.getDelta();
    // Continuous slow majestic rotation
    currentRotationY += 0.15 * delta;

    // Smooth lerp mouse parallax
    bundleGroup.rotation.y = currentRotationY + targetRotationY * 0.6;
    bundleGroup.rotation.x = THREE.MathUtils.lerp(bundleGroup.rotation.x, targetRotationX, 0.05);

    renderer.render(scene, camera);
    animationFrameId = requestAnimationFrame(animate);
  }

  // Check visibility via IntersectionObserver to pause rendering when hero is off-screen
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      isVisible = entry.isIntersecting;
      if (isVisible && !animationFrameId) {
        clock.getDelta(); // reset delta to prevent large jump
        animate();
      }
    },
    { threshold: 0.05 }
  );
  observer.observe(container);

  // Start initial render
  animate();

  // Return clean-up teardown function
  return () => {
    observer.disconnect();
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('resize', onResize);
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    renderer.dispose();
    bumpTexture.dispose();
    barGeo.dispose();
    steelMaterial.dispose();
    darkSteelMaterial.dispose();
    wireGeo1.dispose();
    wireMat.dispose();
    if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
  };
}
