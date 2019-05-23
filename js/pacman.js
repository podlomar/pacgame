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

  render() {
    this.element = document.createElement('div');
    this.element.className = 'pac';
    this.element.textContent = 'Robert: 0';
    return this.element;
  }

  update() {
    this.element.style.backgroundImage = 'url(img/pacboy-active-light.png)';
    this.element.style.left = this.pacX * TILE_SIZE + 'px';

    if(this.pacMouth === 'opened') {
      this.element.style.backgroundPositionX = '0px';
    } else {
      this.element.style.backgroundPositionX = TILE_SIZE + 'px';
    }
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }
}