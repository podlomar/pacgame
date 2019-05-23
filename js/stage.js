const TILE_SIZE = 85;

class Stage {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.squad = [
      new Pacman(this, 3, 1, 'Robert', 'boy', 'light'),
      new Pacman(this, 1, 2, 'Linette', 'girl', 'dark'),
      new Pacman(this, 5, 1, 'Nicol', 'girl', 'medium'),
    ];
  }

  render() {
    this.element = document.createElement('div');
    this.element.className = 'stage';
    this.element.style.width = TILE_SIZE * this.width + 'px';
    this.element.style.height = TILE_SIZE * this.height + 'px';
    
    for(const pac of this.squad) {
      pac.mount(this.element);
    }

    return this.element;
  }

  mount(parent) {
    parent.appendChild(this.render());
  }
}