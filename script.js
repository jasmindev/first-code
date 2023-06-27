var can = 5;
var guess,counter = 0;
var number = Math.floor((Math.random()*10)+1);

while(number>5){
    can--;
    counter ++;
    guess= Number(prompt('Bir rakam giriniz ? '));

    if (guess == number) {
        console.log('Bildiniz');
        break;
    } else if (number>guess) {
        console.log('Yukarı');
    } else {
        console.log('Aşağı');
    }

    if(can == 0) {
        console.log('Hakkınız Bitti');
        break;
    }
}