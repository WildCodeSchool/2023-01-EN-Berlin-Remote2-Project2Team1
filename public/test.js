const btn = document.querySelector('.info-popUp__btn');
const btnText = document.querySelector('.popUp');
const hidden = document.querySelector('.hidden');

btn.addEventListener('click', function () {
  btnText.classList.toggle('hidden');

  btnText.classList.contains('hidden')
    ? (btn.style.backgroundColor = '')
    : (btn.style.backgroundColor = '#ebb51f');
});
