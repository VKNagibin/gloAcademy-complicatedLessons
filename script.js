function stringFn(str) {
   
    if (typeof str != 'string') {
        alert('Это не строка');
        return;
    }

    let newString = str.split('');
   
    for (let i = 1; ; i++) {
       if(newString[0] == ' ') {
          newString.shift();
       } else if (newString[newString.length - 1] == ' ') {
          newString.pop();
       } else {
           break;
       }
    }

    if(newString.length > 30) {
        newString.splice(30, newString.length -30 , '...' );
    }

    return newString.join("");
}



console.log(stringFn(true));
console.log(stringFn(45345));
console.log(stringFn("     wddwdw45345                     "));
console.log(stringFn("    Ssda dad dads,d dfsdffafadadaaa dadasdsadsadsadasdadada        "));
console.log(stringFn("          kj;kjk;jk;jkj             csdcsdcdsacsdc       cdscsddd!!!"));



