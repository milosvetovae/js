//5.1
var block = document.getElementsByTagName('body')[0];
  document.getElementsByTagName('body')[0].innerHTML = "<div></div>";

var block1 = document.getElementsByTagName('div')[0];
  block1.classList.add('body__block');
  document.getElementsByTagName('div')[0].innerHTML = "<p>Страница еще не создана<br>ERROR 404</p>";

var block2 = document.getElementsByTagName('p')[0];
  block2.classList.add('body__block__text');


//5.2
document.getElementsByClassName('body__block')[0];


//5.3
var block = document.getElementsByTagName('body')[0];
  document.getElementsByTagName('body')[0].innerHTML = "<div></div>";

var block1 = document.getElementsByTagName('div')[0];
  block1.classList.add('body__block');
  document.getElementsByTagName('div')[0].innerHTML = "<p>Страница еще не создана<br>ERROR 404</p>";
  block1.classList.add('one');
  block1.classList.add('two');
    var classOne = document.getElementsByClassName('one')[0];
    classOne.style.borderRadius = '50px';
    var classTwo = document.getElementsByClassName('two')[0];
    classTwo.style.padding = '300px 300px';

var block2 = document.getElementsByTagName('p')[0];
  block2.classList.add('body__block__text');