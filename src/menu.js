export function setupMenu(callback) {
    const startButton = document.getElementById('start');
    const mapButtons = document.querySelectorAll('#map-select button');
    const graphicsSelect = document.getElementById('graphics-select');
  
    let selectedMap = 'rio'; // Default
    let selectedGraphics = 'medium';
  
    mapButtons.forEach(button => {
      button.addEventListener('click', () => {
        selectedMap = button.getAttribute('data-map');
        mapButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  
    graphicsSelect.addEventListener('change', () => {
      selectedGraphics = graphicsSelect.value;
    });
  
    startButton.addEventListener('click', () => {
      callback(selectedMap, selectedGraphics);
    });
  }