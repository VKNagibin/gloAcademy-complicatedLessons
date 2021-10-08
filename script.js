'use strict';

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const body = document.querySelector('body');
const div = document.createElement('div');
let currentDay = new Date().getDay();
let log ='';

week[currentDay] = week[currentDay].bold();
week[0] = week[0].italics();
week[week.length - 1] = week[week.length - 1].italics();

for ( let elem in week) {
    log += `<p style="width: 200px; text-align: center; margin: 0 auto">${week[elem]}</p>`;
}

body.insertAdjacentElement('afterbegin', div);
div.insertAdjacentHTML('afterbegin', log);

