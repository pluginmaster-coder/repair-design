// console.log('scrypt download')
// $(document).ready(function () {
  
// });
document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector ('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  // console.log(modalBtn);
  
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
    // console.log('Кликыч по кнопке!');
    //вместо консоли выведем модальшое окно
  });

  closeBtn.addEventListener('click', switchModal);


}); 