//prompting for numbers and turning them into integers
const first = prompt('first number?');
const second = prompt('second number?');

// convert prompted value into integer

// alert(parseInt(first));
const parseFirst= parseInt(first);
const parseSecond= +second;
// alert(parseInt(second));

if (parseFirst > parseSecond){
    alert(parseFirst);
}else {
    alert(parseSecond)


}
parseFirst> parseSecond ? alert(parseFirst): alert(parseSecond);
// alert(math.maxc(parseFirst,parseSecond));