
//========================(veiw data from API)========================
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(result => console.log(result))

//========================(Post data on server API)========================

// let obj = {
//     title: 'new item',
//     body: 'bar',
//     userId: 1,
// }
// fetch('https://jsonplaceholder.typicode.com/todos', {
//     method: 'Post',
//     body: JSON.stringify(obj),
//     headers:{
//         'Content-type': 'application/json'
//     }
// })
//     .then(response => response.json())
//     .then(result => console.log(result))


//========================(Update data on server API)========================

// let obj = {
//     title: 'new item',
//     body: 'bar',
//     userId: 1,
// }
// fetch('https://jsonplaceholder.typicode.com/todos/1', {
//     method: 'PUT',
//     body: JSON.stringify(obj),
//     headers:{
//         'Content-type': 'application/json'
//     }
// })
//     .then(response => response.json())
//     .then(result => console.log(result))


//========================(Delete data on server API)========================


// fetch('https://jsonplaceholder.typicode.com/todos/1',{
//     method:'delete'
// })
// .then(response => response.json())
// .then(result => console.log('data has successfully delete'))

//========================(Application of covid data retreiw)========================

function bringData() {

    fetch('https://corona.lmao.ninja/v3/covid-19/countries')
        .then(response => response.json())
        .then(result => {
            console.log(result)
            let dataContainer = document.getElementById('main_div')
            let template
            for (let i = 0; i < 10; i++) {
                template = `
            <ul class="list-group mt-4">
            <li class="list-group-item active">Country : ${result[i].country}</li>
            <li class="list-group-item">Cases : ${result[i].cases}</li>
            <li class="list-group-item">Deaths : ${result[i].deaths}</li>

            </ul>
            `
                dataContainer.innerHTML += template
            }
        })
}


