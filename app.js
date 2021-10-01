// console.log('hello world ');
// var x = +prompt('enter your first value');
// var x1 = +prompt('enter your 2nd value');
// var x2 = +prompt('enter your 3rd value');
// var x3 = +prompt('enter your 4rth value');

// console.log(x + x1 + x2 + x3);

// *****************************************************
// **************  Date function **************
// function showDate(){
//   console.log(  Date());
//   console.log('date')
// }

// *****************************************************

// let text='abcdefghijklmnopqrstuvwxyz';
// console.log(text.length);


// *****************************************************
// Array methods
// *****************************************************

// var arr=['a','b','c','d','f','g'];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0],arr[2]);
// arr.pop();
// console.log(arr);
// arr.push('new item');
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift('apple');
// console.log(arr);
// var a=arr.slice(0,6)
// console.log(a);
// arr.splice(0,4,'replace item ');
// console.log(arr);


// ***************************************************************************************
// var num1=+prompt("enter your first value");
// var num2=+prompt("enter your second value");
// var num3=+prompt("enter your third value");
// var num4=+prompt("enter your fourth value");
// var e1 = parseInt(document.getElementById('r1-col-1').childNodes[0].nodeValue);
// var e2 = parseInt(document.getElementById('r2-col-1').childNodes[0].nodeValue);
// var e3 = parseInt(document.getElementById('r3-col-1').childNodes[0].nodeValue);

// var b1 = parseInt(document.getElementById('r1-col-2').childNodes[0].nodeValue);
// var b2 = parseInt(document.getElementById('r2-col-2').childNodes[0].nodeValue);
// var b3 = parseInt(document.getElementById('r3-col-2').childNodes[0].nodeValue);

// var c1 = parseInt(document.getElementById('r1-col-3').childNodes[0].nodeValue);
// var c2 = parseInt(document.getElementById('r2-col-3').childNodes[0].nodeValue);
// var c3 = parseInt(document.getElementById('r3-col-3').childNodes[0].nodeValue);

// var total1 = document.getElementById('r4-col-1').innerHTML = e1 + e2 + e3;
// var total1 = document.getElementById('r4-col-2').innerHTML = b1 + b2 + b3;
// var total1 = document.getElementById('r4-col-3').innerHTML = c1 + c2 + c3;




// ***************************************************************************************
// object

// var car={

//     name:'honda',
//     model:2019,
//     weight:'40kg',
//     color: 'red',
//     NameAndModel: function(){

//         return this.name+' '+this.model;
//     }

// };

// console.log(car);
// console.log(car.name);
// console.log(car['model']);
// console.log(car.color);



// ***************************************************************************************



// var str = 'this is the first program i am typing in this program for learning javasprit';

// console.log(str);
// var text= str.replace(/program/g,"Jawan");
// console.log(text);


// ***************************************************************************************


// var d= new Date();
// // console.log(date);
// var month =d.getMonth();
// // console.log(month);
// var y =d.getFullYear();
// console.log(y);
// var arrDays=['Sunday','Monday','Tuesday','wedneday','Thursday','Friday','Saturday']
// var curremntDay= d.getDay();
// console.log(arrDays[ curremntDay]);


// ****************************************************************************************
// --------------------------Varialbe Scope---------------------------------
// ======================var is not a block scope==================================

// var a=10;

// if(true){
//     var a=20;
//     console.log(a);
// }
// console.log(a);


// ====================== let is a block scope==================================


// let a=10;

// if(true){
//     let a=20;
//     console.log(a);
// }
// console.log(a);

// ====================== const is a block scope==================================

// const a=10;

// if(true){
//     const a=20;
//     console.log(a);
// }
// console.log(a);



// var a=10;
// a=20;
// console.log(a);


// let a=10;
// a=20;
// console.log(a);


// const a=10;
// a=20;
// console.log(a);


// const arr=['a','b','c','d'];
// arr[0]='A';
// console.log(arr); v





// *******************************************************************************************
// -----------------------------Template Letrals----------------------------------------------
//Backtic 

// let firstname='Murad';
// let lastName='Khan';

// console.log(`Welcome ${firstname} ${lastName}`);
// console.log(`this is 
// back tics 
// sayntx `)


// *******************************************************************************************
// -----------------------------String Search ----------------------------------------------

// let a=['cat','dog','hen','cow','goat','dog','cow'];

// console.log(a.indexOf('dog'));      //1
// console.log(a.lastIndexOf('dog'));  //5\


// *******************************************************************************************
// -----------------------------Arrow function  ----------------------------------------------


// function foo(){
//     console.log('hello function');
// }

// let foo=()=>console.log('Arrow function');
// foo();

// let welcome=(name1,name2)=> console.log(`Welcome ${name1} & ${name2}`);
// welcome('Murad','Ali');

// function foo(name){
//     console.log('Welcome' +' ' +name);
// }
// foo('Ali');


// *******************************************************************************************
// -----------------------------Rest operator  ----------------------------------------------

// let arr1=['a','b','c'];
// let arr2=[1,2,3];

// let arr3=[...arr1,...arr2,4,5,6]
// console.log(arr3);

// function sum(discription,...arg){
//     let result=0;
//     for (let i in arg){
//         result+=arg[i]

//     }
//     console.log(`${discription} : ${result}`);
// }

// sum('sum 1',2,4,6,8);
// sum('sum 2',2,10,6,8);

// *******************************************************************************************
// -----------------------------Spread operator  ----------------------------------------------

// let arr1 =[10,20,30];
// let arr2= [40,40,];

// let arr3=[...arr1,...arr2];
// console.log(arr3)

// let sum=0;
// for(let i in arr3){
//     sum +=arr3[i]
// }
// console.log(sum);


// *******************************************************************************************
// -----------------------------object Letrals  ----------------------------------------------

// let name = "Murad";
// let course = "Javascript";
// let obj = {
//     name,
//     course
// }

// console.log(obj.name)
// console.log(obj.course)
// console.log(obj)


// let n = "name";
// let c = "course";
// let obj = {
//     ['std'+n]:'Murad khan',
//     [c]:'Javascript',
//     detail(){
//         return `${this.stdname} is the std of ${this.course}`
//     }
// }

// console.log(obj.name)
// console.log(obj.course)
// console.log(obj.stdname)
// console.log(obj['detail']());

// let std='Student';
// let cor='course';
// function show(std,cor){

//     return({std,cor})

// }
// s=show(std,cor);
// console.log(s.std)
// console.log(s.cor)


// *******************************************************************************************
// -----------------------------Destructing array ----------------------------------------------


// let user = ['Murad',, 'ES6',['s_ali','s_18',['Teacher : Sir Ali']]];

// let [name, age=22, sub,[std,stdAge,[teacher]]] = user;

// console.log(name);
// console.log(age);
// console.log(sub);
// console.log(std);
// console.log(stdAge);
// console.log(teacher);


// function user([name, age, sub]){
//     console.log(name)
//     console.log(age)
//     console.log(sub)
// }

// user( ['Murad',26, 'ES6']);


// *******************************************************************************************
// -----------------------------Destructing objects ----------------------------------------------

// let obj ={
//     name:'Murad',
//     age:25,
//     city:'karachi'
// }
// let{name,age,city}=obj;
// console.log(name)

let stdarr = [
    {
        name: 'Murad',
        age: 25,
        city: 'karachi'
    },
    {
        name: 'Kashif',
        age: 23,
        city: 'karachi'
    },
    {
        name: 'Zakir',
        age: 23,
        city: 'karachi'
    },
    {
        name: 'Farhan',
        age: 22,
        city: 'Lahore'
    },
    {
        name: 'Usama',
        age: 22,
        city: 'Lahore'
    },
    {
        name: 'Usama',
        age: 25,
        city: 'Lahore'
    }
]

// stdarr.map(function(item){
//     let {name,age,city}=item;
//     if(name=="Murad")
// console.log(name);
// })


function search(){

let cityToChoose=document.getElementById('cityToChoose').value
let nameToChoose=document.getElementById('nameToChoose').value
let ageTocheck=document.getElementById('ageTocheck').value;
ageTocheck=Number(ageTocheck);
stdarr.filter(function (item) {
    let { name, age, city } = item;
    if( age ===ageTocheck || cityToChoose==city ||nameToChoose==name){
        console.log(`${name} ${age} ${city}`)
    
    }
    else{
        console.log('not fonud  ')
        
    }
})
}









// let num1=+prompt('enter your first value')
// let num2=+prompt('enter your 2nd  value')
// let op=prompt('enter operator')


// switch(op){

//     case '+':
//         console.log(num1+num2)
//     break;
//     case '-':
//         console.log(num1-num2)
//     break;
//     case '*':
//         console.log(num1*num2)
//     break;
//     case '/':
//         console.log(num1/num2)
//     break;
//     default:
//         console.log('invalid value enter ')
// }














