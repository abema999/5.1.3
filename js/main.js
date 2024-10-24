let brandsList = document.querySelector('.brands__list');
let brandsExpandButton = document.querySelector('.brands__expand');

brandsExpandButton.addEventListener('click', function () {
  brandsList.classList.toggle('brands__list--expanded');
  if (brandsList.classList.contains('brands__list--expanded')) {
    brandsList.style.paddingBottom = '46px';
    brandsExpandButton.textContent = 'Скрыть';
    brandsExpandButton.classList.toggle('rotate');
  } else {
    brandsList.style.paddingBottom = '24px';
    brandsExpandButton.textContent = 'Показать все';
    brandsExpandButton.classList.toggle('rotate');
  }
});
