"use strict";

const gameBegin = function(theNumber) {

    let count = 10;

    return function closure() {

        if (count >= 1) {

            let check = prompt("Угадай число от 1 до 100");
            let userNumber = (check === null || check.trim() == '') ? NaN : +check ;

            if (typeof userNumber == 'number' && !isNaN(userNumber)) {
                
                switch (true) {
                    case (userNumber > theNumber):
                        alert(`Загаданное число меньше, осталось попыток ${--count}`);
                        closure();
                        break;
                    case (userNumber < theNumber):
                        alert(`Загаданное число больше, осталось попыток ${--count}`);
                        closure();
                        break;
                    case (userNumber == theNumber):
                        confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")  ? gameBegin( Math.round((Math.random() * 100) + 1) )() : '';
                }

            } else if (check === null) {
                alert("Игра окончена");
            } else {
                let i = confirm("Введи число");
                (i === false) ? alert('игра окончена'): closure();
            }

        } else {
            console.log(theNumber);
            confirm("Попытки закончились, хотите сыграть еще?") ? gameBegin( Math.round((Math.random() * 100) + 1) )() : '';
        }


    };
};

let game = gameBegin( Math.round((Math.random() * 100) + 1) );

game();