//7.1
var button = document.querySelector(".enter__action__button_js"),
    mean = document.querySelector(".enter__action_js"),
    add = document.querySelector(".table");

button.addEventListener('click', function() {

    // добавляем элементы таблицы
    var enter_tr = document.createElement('tr');
    var enter_td = document.createElement('td');
    // добавляем элемент div
    var enter = document.createElement('div');
    enter.className = 'business_js';
    enter.innerHTML = '<p id="mean">' + mean.value + '</p>';
    enter.classList.add('add-table-item_js');
    // добавляем кнопки удалить и редактировать каждому новому элементу списка
    var btn_delete = document.createElement('div');
    var btn_change = document.createElement('div');
    btn_delete.className = 'btn-delete_js';
    btn_change.className = 'btn-change_js';

    // функция удаления по нажатию на кнопку
    btn_delete.addEventListener('click', function(event) {
        var a = event.target;
        var b = a.parentElement;
        var c = b.parentElement;
        var d = c.parentElement;
        d.remove();
    })

    //функция редактирования по нажатию на кнопку
    btn_change.addEventListener('click', function(event) {
        var change_inp = document.createElement('input');
        var change_ok = document.createElement('div');
        change_ok.className = 'change-ok_js';
        change_inp.className = 'change-inp_js';
        change_ok.innerText = 'OK';
        change_inp.value = 'Менять планы не хорошо! Но один раз прощаю.';

        var a = event.target;
        var b = a.parentElement;

        b.append(change_inp);
        b.append(change_ok);

        change_ok.addEventListener('click', function (event) {
            enter.innerText = change_inp.value;
            var btn_delete = document.createElement('div');
            btn_delete.className = 'btn-delete-new_js';

            btn_delete.addEventListener('click', function(event) {
                var a = event.target;
                var b = a.parentElement;
                var c = b.parentElement;
                var d = c.parentElement;
                d.remove();
            })

            enter.append(btn_delete);
        })
    })

    //расположение основных созданных элементов на странице
    enter.append(btn_delete);
    enter.append(btn_change);
    enter_td.append(enter);
    enter_tr.append(enter_td);
    add.append(enter_tr);
});



//7.2
var temp = document.getElementsByClassName('temperature__enter__mean_js')[0];

temp.oninput = function () {
    var res = document.getElementsByClassName('temperature__enter__res_js')[0];
    res.value = ((temp.value * (9/5)) + 32) + "°F";
    return res;
};

