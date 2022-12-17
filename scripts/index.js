let main = document.getElementById('main');
let header = document.getElementById('header');
let d1 = document.getElementById('dropdown1');
let d2= document.getElementById('dropdown2');
let d3 = document.getElementById('dropdown3');

main.onclick = function () {
    header.classList.add('lineDown');
}

d1.onclick = function () {
    header.classList.add('lineDown');
}

d2.onclick = function () {
    header.classList.add('lineDown');
}

d3.onclick = function () {
    header.classList.add('lineDown');
}



// fetch

let f_users = document.getElementById('users')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.classList.add('user');
            div.classList.add('opacity');
            let divh1 = document.createElement('div');
            divh1.classList.add('text-div')
            let h5 = document.createElement('h5');
            h5.classList.add('text');
            h5.innerText = `@${user.username}`;
            let divmail = document.createElement('div');
            divmail.classList.add('mail-div');
            let p = document.createElement('p');
            p.classList.add('text-mail')
            p.innerText = `contact: ${user.email}`;

            f_users.appendChild(div);
            div.append(divh1, divmail);
            divh1.appendChild(h5);
            divmail.appendChild(p);
        }
    });