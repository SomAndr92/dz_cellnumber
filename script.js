
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
function getItemGrid(number) {

    let proverka = number.innerText;
    if (i == 4) {
        alert('Поздравляю, все угадал');

    }
}

num1 = getRandomInt(1, 17);
num2 = getRandomInt(1, 17);
while (num2 == num1) {
    num2 = getRandomInt(1, 17);
}
num3 = getRandomInt(1, 17);
while (num3 == num1 || num3 == num2) {
    num3 = getRandomInt(1, 17);
}
num4 = getRandomInt(1, 17);
while (num4 == num1 || num4 == num2 || num4 == num3) {
    num4 = getRandomInt(1, 17);
}
console.log(num1, num2, num3, num4);

alert('угадай 4 числа')
let i = 0;
let buttons = document.querySelectorAll('button');
buttons.forEach(buttons => {
    buttons.addEventListener("click", function (event) {
        proverka = event.target.innerText
        if (proverka == num1 || proverka == num2 || proverka == num3 || proverka == num4) {
            alert('угадал');
            i++;
            event.target.style.backgroundColor = 'green';
            getItemGrid(number);
        } else {
            alert("не угадал");
            event.target.style.backgroundColor = 'red';
        }
    })
});



