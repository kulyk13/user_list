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
        });
        console.log(namesArr.sort());
        renderTableRows(USERS, tableDataEl);

    } else if (sortUsernameEl) {
        const userNamesArr = [];
        USERS.forEach((user) => {
            let userNamesEl = user.username;
            userNamesArr.push(userNamesEl);
        });
        console.log(userNamesArr.sort());
        renderTableRows(USERS, tableDataEl);

    } else if (sortEmailEl) {
        const emailArr = [];
        USERS.forEach((user) => {
            let emailEl = user.email;
            emailArr.push(emailEl);
        });
        console.log(emailArr.sort());
        renderTableRows(USERS, tableDataEl);

    } else if (sortWebsiteEl) {
        const websitesArr = [];
        USERS.forEach((user) => {
            let websiteEl = user.website;
            websitesArr.push(websiteEl);
        });
        console.log(websitesArr.sort());
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