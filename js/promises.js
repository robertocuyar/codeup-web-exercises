"use strict";
const findDate = ()=> {
let input = document.getElementById('user_input').value
    let output = document.getElementById('response_text')
    fetch(`https://api.github.com/users/${input}/events`, {headers: {'Authorization': `token ${GIT_TOKEN}`}})
        .then(data => data.json())
        .then(data => output.innerHTML = data[0].created_at)
        .catch(error => output.innerHTML = `404 Username not found. ${error}`)
}

const wait = number => {
    return new Promise((resolve, reject) => {
        if (!isNaN(parseFloat(number)))
        setTimeout(()=>{
            if (number <= 1000)
                resolve(`You'll see this after ${number/1000} second`)
            else
                resolve(`You'll see this after ${number/1000} seconds`)
        }, number)
        else
            reject("Error: value is not a number.")

    })
}
wait(6000).then(data => console.log(data))
wait(1000).then(data => console.log(data))
wait('500').then(data => console.log(data))
wait('cheese').then(data => console.log(data))
