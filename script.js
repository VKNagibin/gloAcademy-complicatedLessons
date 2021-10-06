'use strict';


const arrFunc = function() {

    let arr = ['34342234', '25463534542', '989493', '24342425', '4567676', '1234335', '66435453'];

    for (let elem of arr) {

        if (elem[0] == '2' || elem[0] == '4') {
            console.log(elem);
        }
    }
};

const simpleNumber = function() {

    for (let i = 1; i <= 100; i++) {
        
        for (let j = 2; j <= i; j++) {

            if ( i%j === 0 && j !== i) {
                break;
            } else if ( j === i) {
                console.log(`${i} Делители этого числа: 1 и ${i}`);
            }
        }
    } 
};

arrFunc();
simpleNumber();






