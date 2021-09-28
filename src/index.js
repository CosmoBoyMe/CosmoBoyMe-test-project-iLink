import { handlerChangeForm,  handlerSubmitForm } from './form.js';
import './scss/index.scss';
import './slider.js';



const formEl = document.querySelector('.form');
formEl.addEventListener('change', handlerChangeForm);
formEl.addEventListener('submit', handlerSubmitForm);

const selectEl = document.querySelector('.form__select-main');
const selectList = document.querySelector('.form__select-list');
const selectItems = document.querySelectorAll('.form__select-item');

selectEl.addEventListener('click', () => {
  selectList.classList.add('form__select-list--active');
});



selectItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    const formSelector = document.querySelector('.form__select');
    selectList.classList.remove('form__select-list--active');
    formSelector.value = e.target.textContent;

    formEl.dispatchEvent(new Event('change'));
  });
});

// const file = document.querySelector('#file');
