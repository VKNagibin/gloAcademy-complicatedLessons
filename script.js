let num = 266219;

num = num.toString();

for (let i = 0, count = 0; i < num.length; i++) {
    count = (i == 0) ? num[i] : count *= num[i];
    if (i == num.length - 1) {
        console.log(count);
        console.log((count ** 3).toString().slice(0, 2));
    }
}