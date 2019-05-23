document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const stage = new Stage(14, 6);
  stage.mount(app);
  
  document.addEventListener('keydown', (event) => {
    if(event.code.startsWith('Arrow')) {
      stage.squad[0].move(event.code.substr(5).toLowerCase());
    }
  });
});