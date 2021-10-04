let question = confirm('Ваш язык русский?');
let lang;

if (question){
    lang = 'ru';
} else {
    lang = 'en';
}

switch (true) {
    case lang =='ru':
        console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
        break;
    case lang =='en':
        console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
        break;
}

let namePerson = prompt("Введите своё имя");

(namePerson == 'Артём') ? console.log('директор') : 
    (namePerson == 'Александр') ?  console.log('преподаватель') : console.log('студент');
                        