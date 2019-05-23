const TILE_SIZE = 85;

document.addEventListener('DOMContentLoaded', () => {
  const pac = document.querySelector('.pac');
  pac.style.backgroundImage = 'url(img/pacboy-active-light.png)';
  pac.style.backgroundPositionX = TILE_SIZE + 'px';
});