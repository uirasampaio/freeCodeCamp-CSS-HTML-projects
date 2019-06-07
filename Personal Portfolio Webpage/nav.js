function nav() {
  const x = document.querySelector('#myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}
(function displayEvent() {
  const btnClose = document.querySelector('#close-btn');
  const btnOpen = document.querySelector('#display-btn');
  const hidden = document.querySelector('.project1');
  const hidden2 = document.querySelector('.project2');
  const hidden3 = document.querySelector('.project3');
  btnOpen.addEventListener('click', () => {
    btnOpen.style.display = 'none';
    hidden.style.display = 'block';
    hidden2.style.display = 'block';
    hidden3.style.display = 'block';
    btnClose.style.display = 'block';
  }, true)
  btnClose.addEventListener('click', () => {
    btnOpen.style.display = 'block';
    hidden.style.display = 'none';
    hidden2.style.display = 'none';
    hidden3.style.display = 'none';
    btnClose.style.display = 'none';
  }, true)
}())