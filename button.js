const clickme = document.querySelector('.buttoncolor');
clickme.addEventListener('click', () => {
  if (clickme.style.backgroundColor === 'blue') {
    clickme.style.backgroundColor = 'red';
  } else {
    clickme.style.backgroundColor = 'blue';
  }
});

