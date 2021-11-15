
let displayTable = document.getElementById("display-table");



function fetchData() {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(resp => {
            // console.log(resp)
            resp.map((dt) => {
                let { id, name, username, email } = dt


                displayTable.innerHTML += `
            
         
            <tr>
                <th scope="row">${id}</th>
                <td>${name}</td>
                <td>${username}</td>
                <td>${email}</td>   
                <td>
                    <span class="material-icons border border-secondary">delete</span>
                    <span class="material-icons border border-secondary">edit</span>
                </td>
            </tr>
             
            `


            })



        })





}



function saveData() {

    console.log('save data')
}