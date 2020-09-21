"use strict";
const findDate = ()=> {
let input = document.getElementById('user_input').value
    let output = document.getElementById('response_text')
    fetch(`https://api.github.com/users/${input}/events`, {headers: {'Authorization': `token ${GIT_TOKEN}`}})
        .then(data => data.json())
        .then(data => output.innerHTML = data[0].created_at)
        .catch(error => output.innerHTML = `404 Username not found. ${error}`)
}