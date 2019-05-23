const TILE_SIZE = 85;

class Pacman {
  constructor(pacX) {
    this.pacX = pacX;
    this.pacMouth = 'closed'
  }

  move() {
    this.pacX += 1;

    if(this.pacMouth === 'closed') {
      this.pacMouth = 'opened';
    } else {
      this.pacMouth = 'closed';
    }

    this.update();
  }

  update() {
    const pac = document.querySelector('.pac');
    pac.style.backgroundImage = 'url(img/pacboy-active-light.png)';
    pac.style.left = this.pacX * TILE_SIZE + 'px';

    if(this.pacMouth === 'opened') {
      pac.style.backgroundPositionX = '0px';
    } else {
      pac.style.backgroundPositionX = TILE_SIZE + 'px';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const robert = new Pacman(3);
  robert.update();

  document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight') {
      robert.move();
    }
  });
});