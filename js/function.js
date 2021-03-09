// function declaration
function myFunction(){
    alert('myFunction');
}

function getTotal(total=100, tax=.08, discount=0){
    // alert( total + (total* tax)- discount);
    return total + (total * tax)- discount;
}
getTotal(89, .08, 5);
getTotal(200);

const firstNumber= getTotal();
alert(firstNumber);