console.log('hello word');
console.log(200);
console.log(true);
console.log(null);
var num = 10;
console.log(num);
console.log("string", null, num, 12.22, true, false);

function makecoffee(sugar, milk) {
    var instruction = 'boil water,';
    instruction += 'pour into cup,';
    instruction += 'add a coffee granuals,';
    instruction += 'add ' + sugar + ' spoon of sugar,';
    instruction += 'add ' + milk + '% milk.';
    return instruction;
}
console.log(makecoffee(2, 20));

var car = {
    color: 'red',
    speed: 200,
    drive: function () { return "drive"; }
};

var shoppingList = [
    'apple',
    2,
    'pear'
];

var mycar = {
    color: 'blue',
    make: 'volvo',
    speed: 160,
    engine: {
        size: 2.0,
        make: 'bmw',
        fuel: 'patrol',
        pistons: [{ maker: 'bmw' }, { maker: 'bmw' }],
    },
    drive: function () { return 'drive'; }
};

var arr = [1, 2.2, 'ved', ['banana', 'orange'], 3.543, { car: 'hero honda' }, function () { return 'drive'; },];

console.log(mycar.make);
console.log(mycar.engine.size);
console.log(mycar.drive);
console.log(mycar.drive());
console.log(mycar.engine.pistons);
console.log(mycar.engine.pistons[0]);

// this with in backes shows it's index
console.log(arr[1 + 1 - 2]);
var a = 10;
console.log(arr[a - 5 - 2]);

console.log(mycar['make']);
console.log(mycar['engine']);
console.log(mycar['engine']['pistons'][1]['maker']);
console.log(mycar['drive']());

var poiter = 'speed';
console.log(mycar[poiter]);

mycar.make = 'ford';
console.log(mycar.make);
mycar.make += 200;
console.log(mycar.make);
mycar.speed *= 2;
console.log(mycar.speed);
console.log(mycar.engine = { newengine: 'new' });
console.log(mycar.drive = 'drive');
mycar.model = 'v60';
console.log(mycar.model);
mycar.stop = function () { return 'stop'; }
console.log(mycar.stop());
console.log(mycar);
delete mycar.color
console.log(mycar);

var array = ['string', 100, ['embaed', 20], { car: 'ford' }, function () { return 'drive'; }, 'veddant'];
console.log(array);
console.log(array[2]);
array[5] = 'new string value';
console.log(array);

array.shift();
console.log(array);
array.pop();
console.log(array);
array.unshift(20, 22, 20, 'string', [], {}, function () { });
console.log(array);
array.push('naitik');
console.log(array);
array.splice(2, 2);
console.log(array);
array.splice(1, 0, 'banana', 'mango');
console.log(array);
array.splice(2, 2, 'world200');
console.log(array);

function myName() {
    var fullName = 'ved trivedi'
    function concat(myName) {
        return "Mr." + myName;
    }
    return concat(fullName);

}
console.log(myName());

var obj = [{}, {}];

function namee(fullname) {
    return fullname.firstname + fullname.lastname;
}

console.log(namee({ firstname: 'ved', lastname: ' trivedi' }));

function namme(fullname) {
    return fullname();
}

console.log(namme(function(){return 'embed';}));

console.log( myNamee, printName() );

var myNamee = "Lawrence";

function printName()
{
    console.log( a, embed() );
    
    var a = 100;
    
    function embed(){ return "hello"; }
    
    return "John Doe";
}

var engine = {
    maker: "Ford",
    headGasket:{
        maker: "Golf",
        pots:[
            "piston1",
            "piston2"
        ]
    }
};


function runExpression()
{   
    var a = 10;
    
    function add(b)
    {   
        return a + b;
    }
    
    console.log(
        add(90),
        add(20)
    );
} 
console.log(runExpression);
console.log(runExpression());


function runExpressionn()
{   
    var a = 10;
    
    function add()
    {   
        // var engine = "New engine";
        console.log( engine, a );
        
        test = "new stirng";
        test2 = "new string 2";
        test3 = "new string 3";
    }
    
    add();
}

//console.log( this );

var object = {
    prop: this,
    embed:
    {
        method: function(){ return this; }
    }
};

var arrayy = [
    this,
    function(){ return this; }
];

function global(){
    return this;
}

global();
object.embed.method();
arrayy[1]();

global.call( object );
object.embed.method.call( object );
arrayy[1].call( object );

new global();
new object.embed.method( object );
new arrayy[1]();

