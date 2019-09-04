//ТАЙМЕР
var dateInput = document.querySelector('#date__input_js');
var dateResult = document.querySelector('#date__result_js');
var timerId;

//функция отсчета мс до нужной даты + валидация
dateInput.oninput = function() {
    var aInput = dateInput.value;
    var now = new Date();
        mAInput = Date.parse(aInput);
        mNow = Date.parse(now);
    if (mAInput <= mNow) {
        alert('Вы не можете выбрать дату раньше сегодня!');
        aInput.value = "";
    } else {
        clearInterval(timerId);
        timerId = setInterval(startDate, 1000, mAInput);
    }
}

//функция получения кол-ва оставшихся дней
function getDays(day) {
    return Math.round(day / 86400000);
}

//функция перевода даты из мс в адекватный вид
function startDate(event) {
    var mN = new Date(),
        mN = Date.parse(mN);
    var raz = event - mN,
        raz = new Date(raz);
    dateResult.innerHTML = getDays(Date.parse(raz)) + ' д., ' + raz.getHours() + ' ч., ' + raz.getMinutes() + ' мин., ' + raz.getSeconds() + ' сек. ';
}


// ЛАМПОЧКИ
//первая лампочка
var lampsHover1 = document.querySelector('#lamps__hover__1_js');

lampsHover1.addEventListener('mouseover', function(event) {
    var a = event.target;
    a.style.backgroundImage = 'url("img/lamps.png")';
    a.style.filter = 'drop-shadow(0 0 3px rgba(100,0,0,0.5))';
    a.style.backgroundSize = '300px';
    a.style.backgroundPositionX = '-14px';
    a.style.backgroundPositionY = '7px';
    var lamps = document.querySelector('.lamps');
    lamps.style.background = 'rgba(0,0,0,0.5)';
});

lampsHover1.addEventListener('mouseout', function(event) {
    var a = event.target;
    a.style.backgroundImage = 'url("img/black.png")';
    a.style.backgroundSize = '100%';
    a.style.backgroundPositionX = '0px';
    a.style.backgroundPositionY = '0px';
    var lamps = document.querySelector('.lamps');
    lamps.style.background = 'aliceblue';
});

//вторая лампочка
var lampsHover2 = document.querySelector('#lamps__hover__2_js');

lampsHover2.addEventListener('mouseover', function(event) {
    var a = event.target;
    a.style.backgroundImage = 'url("img/lamps.png")';
    a.style.filter = 'drop-shadow(0 0 3px rgba(100,0,0,0.5))';
    a.style.backgroundSize = '300px';
    a.style.backgroundPositionX = '-14px';
    a.style.backgroundPositionY = '207px';
    var lamps = document.querySelector('.lamps');
    lamps.style.background = 'rgba(239, 206, 74, 0.5)';
});

lampsHover2.addEventListener('mouseout', function(event) {
    var a = event.target;
    a.style.backgroundImage = 'url("img/yellow.png")';
    a.style.backgroundSize = '100%';
    a.style.backgroundPositionX = '0px';
    a.style.backgroundPositionY = '0px';
    var lamps = document.querySelector('.lamps');
    lamps.style.background = 'aliceblue';
});


//третья лампочка
var lampsHover3 = document.querySelector('#lamps__hover__3_js');

lampsHover3.addEventListener('mouseover', function(event) {
    var a = event.target;
    a.style.backgroundImage = 'url("img/lamps.png")';
    a.style.filter = 'drop-shadow(0 0 3px rgba(100,0,0,0.5))';
    a.style.backgroundSize = '300px';
    a.style.backgroundPositionX = '-14px';
    a.style.backgroundPositionY = '405px';
    var lamps = document.querySelector('.lamps');
    lamps.style.background = 'rgba(66, 141, 255, 0.5)';
});

lampsHover3.addEventListener('mouseout', function(event) {
    var a = event.target;
    a.style.backgroundImage = 'url("img/blue.png")';
    a.style.backgroundSize = '100%';
    a.style.backgroundPositionX = '0px';
    a.style.backgroundPositionY = '0px';
    var lamps = document.querySelector('.lamps');
    lamps.style.background = 'aliceblue';
});


//ПАРАЛЛАКС ЭФФЕКТ
var hover = document.querySelector('.parallax__bg');

hover.addEventListener('mouseover', function(event) {
    var a = event.target;
    a.style.transition = '5s';
    a.style.backgroundSize = '120%';
});

hover.addEventListener('mouseout', function(event) {
    var a = event.target;
    a.style.transition = '5s';
    a.style.backgroundSize = '100%';
 });

document.addEventListener('scroll', function() {
    var pos = window.pageYOffset / 6;
    document.getElementsByClassName('parallax__bg')[0].style.backgroundPositionY = pos + '%';
});