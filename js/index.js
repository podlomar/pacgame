const TILE_SIZE = 85;
let pacMouth = 'closed';

document.addEventListener('DOMContentLoaded', () => {
  const pac = document.querySelector('.pac');
  pac.style.backgroundImage = 'url(img/pacboy-active-light.png)';
  pac.style.backgroundPositionX = TILE_SIZE + 'px';

  document.addEventListener('click', () => {
    if(pacMouth === 'closed') {
      pac.style.backgroundPositionX = '0px';
      pacMouth = 'opened';
    } else {
      pac.style.backgroundPositionX = TILE_SIZE + 'px';
      pacMouth = 'closed';
    }
  });
});