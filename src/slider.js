const moveSliderTo = (eventName, newIndex) => {
    const sliderItemsEl = [...document.querySelectorAll('.slider__item')];
    const activeItem = document.querySelector('.slider__item--active');
    let index = sliderItemsEl.findIndex((element) =>
      element.classList.contains('slider__item--active'),
    );
    activeItem.classList.remove('slider__item--active');
  
    if (eventName === 'next') {
      index = index === sliderItemsEl.length - 1 ? 0 : index + 1;
    }
    if (eventName === 'prev') {
      index = index === 0 ? 2 : index - 1;
    }
    if (eventName === 'dot') {
      index = newIndex;
    }
  
    const activeDot = document.querySelector('.slider__dot--active');
    const dotsEl = document.querySelectorAll('.slider__dot');
    activeDot.classList.remove('slider__dot--active');
    [...dotsEl][index].classList.add('slider__dot--active');
  
    sliderItemsEl[index].classList.add('slider__item--active');
  };
  
  const arrowPrev = document.querySelector('.slider__arrow-prev');
  const arrowNext = document.querySelector('.slider__arrow-next');
  const sliderDots = document.querySelectorAll('.slider__dot');
  
  sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      moveSliderTo('dot', index);
    });
  });
  
  arrowNext.addEventListener('click', () => {
    moveSliderTo('next');
  });
  
  arrowPrev.addEventListener('click', () => {
    moveSliderTo('prev');
});