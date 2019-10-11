document.getElementById('modal_btn').addEventListener('click', function() {
  document.querySelector('.modal-bg').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.modal-bg').style.display = 'none';
});
