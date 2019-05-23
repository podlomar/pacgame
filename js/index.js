document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const stage = new Stage(6, 3);
  stage.mount(app);
  
  const robert = new Pacman(3);
  robert.mount(stage.element);

  document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight') {
      robert.move();
    }
  });
});