document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const stage = new Stage(14, 6);
  stage.mount(app);
  
  const robert = new Pacman(stage, 3, 1);
  robert.mount(stage.element);

  document.addEventListener('keydown', (event) => {
    if(event.code.startsWith('Arrow')) {
      robert.move(event.code.substr(5).toLowerCase());
    }
  });
});