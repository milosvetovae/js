var block = document.getElementsByTagName('body')[0];
  document.getElementsByTagName('body')[0].innerHTML = "<div></div>";

var block1 = document.getElementsByTagName('div')[0];
  block1.classList.add('body__block');
  document.getElementsByTagName('div')[0].innerHTML = "<p>Страница еще не создана<br>ERROR 404</p>";

var block2 = document.getElementsByTagName('p')[0];
  block2.classList.add('body__block__text');
