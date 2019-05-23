const TILE_SIZE = 85;
let pacMouth = 'closed';
let pacX = 0;

document.addEventListener('DOMContentLoaded', () => {
  const pac = document.querySelector('.pac');
  pac.style.backgroundImage = 'url(img/pacboy-active-light.png)';
  pac.style.backgroundPositionX = TILE_SIZE + 'px';

  document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight') {
      pacX += 1;
      pac.style.left = pacX * TILE_SIZE + 'px';
      
      if(pacMouth === 'closed') {
        pac.style.backgroundPositionX = '0px';
        pacMouth = 'opened';
      } else {
        pac.style.backgroundPositionX = TILE_SIZE + 'px';
        pacMouth = 'closed';
      }
    }
  });
});