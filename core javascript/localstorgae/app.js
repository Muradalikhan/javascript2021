
let displayTable = document.getElementById("display-table");



function fetchData() {

    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(resp => resp.json())
    //     .then(resp => {
    //         // console.log(resp)
    //         resp.map((dt) => {
    //             let { id, name, username, email } = dt


    //             displayTable.innerHTML += `


    //         <tr>
    //             <th scope="row">${id}</th>
    //             <td>${name}</td>
    //             <td>${username}</td>
    //             <td>${email}</td>   
    //             <td>
    //                 <span class="material-icons border border-secondary">delete</span>
    //                 <span class="material-icons border border-secondary">edit</span>
    //             </td>
    //         </tr>

    //         `


    //         })



    //     })






}


var nam = document.getElementById('nameInp')
var userName = document.getElementById('userNameInp')
var email = document.getElementById('emailInp')
var arr=[]
function saveData() {
    console.log('i m working')

    var obj = {
        nam: nam.value,
        userName: userName.value,
        email: email.value
    }

    if (localStorage !== null) {
       arr= arr.push(obj)
        console.log('local storage is availible')
        localStorage.setItem('userarr', arr)
        


        // displayTable.innerHTML = `
            
        // <tr>
        //     <th scope="row">${1}</th>
        //     <td>${localStorage.getItem('name')}</td>
        //     <td>${localStorage.getItem('userName')}</td>
        //     <td>${localStorage.getItem('email')}</td>   
        //     <td>
        //         <span class="material-icons border border-secondary">delete</span>
        //         <span class="material-icons border border-secondary">edit</span>
        //     </td>
        // </tr>
         
        `
    }

}