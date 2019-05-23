class Pacman {
  constructor(stage, pacX, pacY, name, gender, skinTone) {
    this.stage = stage;
    this.pacX = pacX;
    this.pacY = pacY;
    this.name = name;
    this.gender = gender;
    this.skinTone = skinTone;
    this.pacMouth = 'closed';
    this.facing = 'right';
  }

  move(dir) {
    this.facing = dir;
    switch(dir) {
      case 'right':
        if(this.pacX < this.stage.width - 1) {
          this.pacX += 1;
        }
        break;
      case 'left':
        if(this.pacX > 0) {
          this.pacX -= 1;
        }
        break;
      case 'up':
        if(this.pacY > 0) {
          this.pacY -= 1;
        }
        break;
      case 'down':
        if(this.pacY < this.stage.height - 1) {
          this.pacY += 1;
        }
        break;
    }
    
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
    return this.element;
  }

  update() {
    this.element.textContent = `${this.name}: 0`;
    this.element.style.backgroundImage = `url(img/pac${this.gender}-active-${this.skinTone}.png)`;
    this.element.style.left = this.pacX * TILE_SIZE + 'px';
    this.element.style.top = this.pacY * TILE_SIZE + 'px';

    if(this.pacMouth === 'opened') {
      this.element.style.backgroundPositionX = '0px';
    } else {
      this.element.style.backgroundPositionX = TILE_SIZE + 'px';
    }

    switch(this.facing) {
      case 'right':
        this.element.style.backgroundPositionY = '0px';
        break;
      case 'up':
        this.element.style.backgroundPositionY = TILE_SIZE + 'px';
        break;
      case 'down':
        this.element.style.backgroundPositionY = 2*TILE_SIZE + 'px';
        break;
      case 'left':
        this.element.style.backgroundPositionY = 3*TILE_SIZE + 'px';
        break;
    }
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }
}