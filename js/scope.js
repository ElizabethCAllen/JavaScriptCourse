const name = 'global';
const sea = 'sea';


const user = {
    name: ' user1',
    greet: function () {
        console.log('hello', this);
    },
    takeDamage: function(){
        this.health-=20;
        console.log(this);
    }
}
console.log(takeDamage);

function country1() {
    const name= 'country1';
    console.log(name);
    console.log(sea);
}

function country2() {
    const name= 'country2';
    console.log(name);
    console.log(sea);
}

console.log(name);
console.log(this);
  
country1();
country2();

document.querySelector('button').addEventListener('click', function() {
    console.log('button clicked', this);
    this.remove();
});
// "this" keyword
const user1 = {name:'user1'};
const user2 = {name:'user2'};
function sayMyName() {
    console.log(this.name);    
}
sayMyName();
user1.sayMyName();
user2.sayMyName();