document.addEventListener('DOMContentLoaded', () => {
  const stage = document.querySelector('.stage');
  const robert = new Pacman(3);
  robert.mount(stage);

  document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight') {
      robert.move();
    }
  });
});