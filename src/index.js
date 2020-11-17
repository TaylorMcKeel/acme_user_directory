const faker = require('faker')
const userList = document.querySelector('#user-list')

const users = new Array(5).fill('').map(_ =>{
    return faker.helpers.userCard()
})

let curr = window.location.hash.slice(1) * 1

function favorite(){
    console.log('hey')
}

const render = ()=>{
    const html = `
        ${users.map((item, idx) =>{
            return `<li id='${idx}'><a href='#${idx}'>${item.name}</a>
                ${curr === idx ? `<ul>
                    <li>${item.username}</li>
                    <li>${item.email}</li>
                    <li>${item.phone}</li>
                </ul>` : ''}
                <button class='button' id= '${idx}'>Favorite</button>
            </li>`
        }).join('')}
    `
    userList.innerHTML = html
    const buttons = Array.from(document.querySelectorAll('.button'))
    console.log(buttons)
    buttons.map(item=>{
        item.addEventListener('click', (ev)=>{
            const item = document.getElementById(`${ev.target.id}`)
            item.style.font = "italic bold 20px arial,serif"
        })
    })
}

render()

window.addEventListener('hashchange', ()=>{
    curr = window.location.hash.slice(1) * 1
    render()
})