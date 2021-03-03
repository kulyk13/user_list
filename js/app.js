//Global variables
let USERS = JSON.parse(DATA);
const tableDataEl = document.getElementById('tableData');
const tableHeadEl = document.getElementById('tableHead');
// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }


tableHeadEl && tableHeadEl.addEventListener('click', handleClick(USERS, tableDataEl));

function handleClick(array, domEl) {
    return event => {
        const thEl = event.target.closest('th');
        if (thEl) {
            const { key, order } = thEl.dataset
            thEl.dataset.order *= -1
            USERS.sort((a, b) => a[key].localeCompare(b[key]) * order)
            renderTableRows(array, domEl)
        }
    }
}

renderTableRows(USERS, tableDataEl)

function renderTableRows(data_array, element) {
    let html = '';
    data_array.forEach(row => {
        html += createTableRow(row);
    });
    element.innerHTML = html;
}

function createTableRow(table_data) {
    return `
    <tr>
        <td>
            ${table_data.name}     
        </td>
        <td>
            ${table_data.username}     
        </td>
        <td>
            ${table_data.email}
        </td>
        <td>
            ${table_data.website ?? '---'}
        </td>
    </tr>`
}




// const promise1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let rand = Math.random()
//         if (rand > 0.5) {
//             resolve(rand)
//         } else {
//             reject('Error! - 1')
//         }
//     }, 1000);
// })
// const promise2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let rand = Math.random()
//         if (rand > 0.5) {
//             resolve(rand)
//         } else {
//             reject('Error! - 2')
//         }
//     }, 900);
// })
// const promise3 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let rand = Math.random()
//         if (rand > 0.5) {
//             resolve(rand)
//         } else {
//             reject('Error! - 3')
//         }
//     }, 900);
// })


// getDataFromPromise(promise1, promise2, promise3)


// async function getDataFromPromise(p) {
//     try {
//         const data = await p
//         return data
//     } catch (e) {
//         return e
//     }
// }


let timer = setTimeout(async function tick () {
    
    timer = setTimeout(tick, 1000);
    
}, 1000);



// let answer = prompt('Your secret', 'secret')

// const saySecret = prepareSecret(answer)
// answer = null


// function prepareSecret(secret) {
//     return function (phrase) {
//         return `${phrase} + ${secret}`
//     }
// }



function powFabric(n) {
    return num => num ** n
}


const pow4 = powFabric(4)
const pow2 = powFabric(2)
const pow100 = powFabric(100)



console.log(pow4(4));
console.log(pow2(4));
console.log(pow100(4));