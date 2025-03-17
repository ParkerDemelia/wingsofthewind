export function updateGlider(glider) {
    // Simple gravity and wind simulation
    glider.position.y -= 0.05; // Gravity
    glider.position.x += 0.1;  // Wind (basic)
    glider.rotation.z = Math.sin(Date.now() * 0.001) * 0.2; // Sway effect
  }