var stdName=document.getElementById('stdname');
var stdClassId=document.getElementById('stdclassid');
var stdRollno=document.getElementById('stdrollno');
var stdEnroll=document.getElementById('stdenroll');
var stdDepartment=document.getElementById('sdtdepart');


var printName=document.getElementById('getname');
var printRollno=document.getElementById('getrollno');
var printEnrollment=document.getElementById('getenroll');
var printClassId=document.getElementById('getclass');
var printDepartment=document.getElementById('getdepart');

function adddata(){

    if(localStorage!==null){
        console.log('localstorage is availible');
        localStorage.setItem('name',stdName.value);
        localStorage.setItem('classid',stdClassId.value);
        localStorage.setItem('rollno',stdRollno.value);
        localStorage.setItem('enrollment',stdEnroll.value);
        localStorage.setItem('department',stdDepartment.value);
    }
}

function printdata(){

    printName.innerHTML=localStorage.getItem('name');
    printClassId.innerHTML=localStorage.getItem('classid');
    printRollno.innerHTML=localStorage.getItem('rollno');
    printEnrollment.innerHTML=localStorage.getItem('enrollment');
    printDepartment.innerHTML=localStorage.getItem('department');
}