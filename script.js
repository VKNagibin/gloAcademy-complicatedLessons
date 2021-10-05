let question = confirm('Ваш язык русский?');
let lang;

if (question){
    lang = 'ru';
} else {
    lang = 'en';
}

let num = {ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
           en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
          };
console.log(num[lang]);

if (lang =='ru') {
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else {
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
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
                        