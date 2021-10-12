const body = document.querySelector('body');

const weekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];


const getCurrHours = function() {
    let hour = new Date().getHours();
    if ( hour == 1 || hour == 21 ) {
        return `${hour} час`;
    } else if ( (hour > 1 && hour < 5) || (hour > 21 && hour < 24)) {
        return `${hour} чаcа`;
    } else {
        return `${hour} чаcов`;
    }
};

const getCurrMinutes = function() {
    let minutes = new Date().getMinutes();
    if ( minutes == 1 || minutes == 21 || minutes == 31 || minutes == 41 || minutes == 51) {
        return `${minutes} минута`;
    } else if ( (minutes > 1 && minutes < 5) || (minutes > 21 && minutes <= 24) || (minutes > 31 && minutes <= 34) || (minutes > 41 && minutes <= 44)|| (minutes > 51 && minutes <= 54)) {
        return `${minutes} минуты`;
    } else {
        return `${minutes} минут`;
    }
};

const getCurrSeconds = function() {
    let seconds = new Date().getSeconds();
    if ( seconds == 1 || seconds == 21 || seconds == 31 || seconds == 41 || seconds == 51) {
        return `${seconds} секунда`;
    } else if ( (seconds > 1 && seconds < 5) || (seconds > 21 && seconds <= 24) || (seconds > 31 && seconds <= 34) || (seconds > 41 && seconds <= 44)|| (seconds > 51 && seconds <= 54)) {
        return `${seconds} секунды`;
    } else {
        return `${seconds} секунд`;
    }
};

setInterval(function() {

    let dateString = `<div style='text-align: center'>
                        <h2>
                            Сегодня ${weekDay[new Date().getDay()]},
                            ${new Date().getDate()} ${month[new Date().getMonth()]}
                            ${new Date().getFullYear()} года, ${getCurrHours()}
                            ${getCurrMinutes()} ${getCurrSeconds()} 
                        </h2>
                        <h2>
                            ${oneNumber(new Date().getDate())}.${oneNumber(new Date().getMonth() + 1)}.${new Date().getFullYear()}
                            - ${oneNumber(new Date().getHours())}.${oneNumber(new Date().getMinutes())}.${oneNumber(new Date().getSeconds())}
                        </h2>`;

    body.innerHTML = dateString;

                  
}, 1000);


const oneNumber = function(num) {

    if (num.toString().length == 1) {
        return '0' + num;
    } else {
        return num;
    }

};




