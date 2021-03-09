// function declaration
function myFunction(){
    alert('myFunction');
};

//function expression
const myFunction2 = function () {
    alert('myfunction2');
};


//arrow function expression
const myFunction3 = () => {
    alert('myfunction3');
};

//callback funstion : function that is passed into another
['mick', 'goof', 'don'].forEach( (character) => {console.log(character);})

//paramerter is the thing descrivbed passed in 
function getTotal(total=100, tax=.08, discount=0){
    // alert( total + (total* tax)- discount);
    return total + (total * tax)- discount;
    //return keyword is what makes assignments top this function possible 
}
//arguement is the thing actuialkly passed in
// 
// getTotal(89, .08, 5);
// getTotal(200);

const firstNumber= getTotal();
alert(firstNumber);
