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


tableHeadEl.addEventListener('click', event => {
    const sortNameEl = event.target.closest('.name');
    const sortUsernameEl = event.target.closest('.user-name');
    const sortEmailEl = event.target.closest('.email');
    const sortWebsiteEl = event.target.closest('.website');
    if (sortNameEl) {
        const namesArr = [];
        USERS.forEach((user) => {
            let nameEl = user.name;
            namesArr.push(nameEl);
            namesArr.sort();
        });
        console.log(namesArr);
        USERS.forEach((user, i, array) => {
            array[i] = {...array[i], name: namesArr[i]}
        })
        renderTableRows(USERS, tableDataEl);

    } else if (sortUsernameEl) {
        const userNamesArr = [];
        USERS.forEach((user) => {
            let userNameEl = user.username;
            userNamesArr.push(userNameEl);
            userNamesArr.sort();
        });
        console.log(userNamesArr);
        USERS.forEach((user, i, array) => {
            array[i] = {...array[i], username: userNamesArr[i]}
        })
        renderTableRows(USERS, tableDataEl);

    } else if (sortEmailEl) {
        const emailArr = [];
        USERS.forEach((user) => {
            let emailEl = user.email;
            emailArr.push(emailEl);
            emailArr.sort();
        });
        console.log(emailArr);
        USERS.forEach((user, i, array) => {
            array[i] = {...array[i], email: emailArr[i]}
        })
        console.log();
        renderTableRows(USERS, tableDataEl);

    } else if (sortWebsiteEl) {
        const websiteArr = [];
        USERS.forEach((user) => {
            let websiteEl = user.website;
            websiteArr.push(websiteEl);
            websiteArr.sort();
        });
        console.log(websiteArr);
        USERS.forEach((user, i, array) => {
            array[i] = {...array[i], website: websiteArr[i]}
        })
        console.log();
        renderTableRows(USERS, tableDataEl);

    }
});


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
    <tr">
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