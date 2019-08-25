//5.1 + 5.3 + 5.4
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
  var change = [{borderRadius: '70px'}, {borderRadius: '270px'}, {borderRadius: '470px'}];
  var change1 = [{background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKG4GC-1mYYQdJT9v8TCoEfJQ5asJ2o3GGxb-Uzv8G41o8h8TpDg)', backgroundSize: 'cover'}, {background: 'url(https://i.pinimg.com/736x/d2/ab/90/d2ab900cef1e93d155e9c557fd23225f.jpg)', backgroundSize: 'cover'}, {background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtw1RBVck7uU6rZP0mhLV14w33oYdxzKKSOSX1OnXx19lWF7l0)', backgroundSize: 'cover'}];
  classOne.addEventListener('click', function() {
    classOne.animate (change, {
      duration: 3000,
      fill: 'forwards'
    });
  });
  classOne.addEventListener('click', function() {
    classOne.animate (change1, {
      duration: 3000,
      fill: 'forwards'
    });
  });


var block2 = document.getElementsByTagName('p')[0];
  block2.classList.add('body__block__text');


//5.2
document.getElementsByClassName('body__block')[0];



