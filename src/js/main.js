document.addEventListener("DOMContentLoaded", function ev(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector ('.modal__close');
  // const closeWindow = 
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
    console.log('Клик по кнопке!');
  };
  document.addEventListener('click', e=> {
    if (e.target == modal)
    modal.classList.remove('modal--visible');   
  });
   document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      modal.classList.remove('modal--visible');
    }
};
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  
  closeBtn.addEventListener('click', switchModal);

}); 