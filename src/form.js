const getSecondRowEl = () => {
  const secondFormRow = document.createElement('div');
  secondFormRow.classList.add('form__row');
  secondFormRow.innerHTML = `<div class="form__item">
        <label class="form__label" for="country">Your country</label>
        <input class="form__input" id="country" type="text" placeholder="Where are you from?">
    </div>
    <div class="form__item">
        <label class="form__label" for="city">Your City</label>
        <input class="form__input" id="city" type="text" placeholder="Your native city">
    </div>
    <div class="form__item">
        <label class="form__label" for="birthday">Your date of birth</label>
        <input class="form__input" id="birthday" type="text" placeholder="dd.mm.yyyy">
    </div>`;

  return secondFormRow;
};

const createFileItem = (file) => {
  const { name, size, type } = file;
  const imgSrc = URL.createObjectURL(file);

  const liElement = document.createElement('li');
  liElement.classList.add('form__file-item');
  liElement.innerHTML = `
  <img class="form__file-preview-img" src="${imgSrc}" alt="file check foto">
  <div class="form__file-info">
      <p class="form__file-name">${name}</p>
      <p class="form__file-format">${type} ${size} байт</p>
  </div>
  `;
  return liElement;
};

const getFileRowEl = () => {
  const documentContainerEl = document.createElement('div');
  documentContainerEl.classList.add('form__document');
  documentContainerEl.innerHTML = `
  <div class='form__document-row'>
    <label for="file" class="form__document-label">Proof your identity with some documents</label>
    <input class="visible-hidden" multiple id="file" type="file">
  </div>
    <ul class='form__file-list'></ul>`;

  const fileInput = documentContainerEl.querySelector('#file');

  fileInput.addEventListener('change', (e) => {
    const formDocumentList = document.querySelector('.form__file-list');
    const fileList = e.target.files;

    const newFilesItemsEl = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      newFilesItemsEl.push(createFileItem(file));
    }

    formDocumentList.replaceChildren(...newFilesItemsEl);
  });

  return documentContainerEl;
};

const handlerSubmitForm = (e) => {
  e.preventDefault();
  const submitButton = document.querySelector('.form__submit-btn');
  submitButton.setAttribute('disabled', true);
  const submitStatusEl = document.querySelector('.form__submit-status');
  submitStatusEl.classList.add('form__submit-status--active');
};

let isSecondRowAdded = false;
let isFileRowAdded = false;

const formContentEl = document.querySelector('.form__content');
const formGenderSelect = document.querySelector('.form__select');
const nameFormEl = document.querySelector('#name');

const handlerChangeForm = (e) => {

  if (nameFormEl.value !== '' && formGenderSelect.value !== '' && !isSecondRowAdded) {
    formContentEl.append(getSecondRowEl());
    isSecondRowAdded = true;
    return;
  }

  if (isSecondRowAdded) {
    const country = document.querySelector('#country');
    const city = document.querySelector('#city');
    const birthday = document.querySelector('#birthday');

    if (!isFileRowAdded && country.value !== '' && city.value !== '' && birthday.value !== '') {
      formContentEl.append(getFileRowEl());
      isFileRowAdded = true;
    }
  }
  if (e.target?.files?.length) {
    const submitButton = document.querySelector('.form__submit-btn');
    submitButton.removeAttribute('disabled');

  }
};

export { handlerChangeForm, handlerSubmitForm };
