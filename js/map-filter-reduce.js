"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const langUser = users.filter(({languages}) => languages.length >= 3);

const emailUser = users.map(({email}) => email);

const totalExp = users.reduce((initial, {yearsOfExperience})=> {
    return initial + yearsOfExperience
},0)
const average = totalExp/users.length

const longEmail = users.reduce((compareStr,{email}) =>{
    if (compareStr.length < email.length){
        compareStr = email
    }
    return compareStr
},"");

const listMessage = users.reduce((acc, {name}) =>{
    return acc + name + ", "
},"")
let strMessage = `Your instructors are: ${listMessage.slice(0, -2)}.`

const uniqueList = users.reduce((total, {languages})=>{
    return total + languages + ","
},"")
console.log(uniqueList);

let newStr = uniqueList.slice(0, -1);
let newArr = newStr.split(',');

const uniqueContent = newArr.filter((a, b) => newArr.indexOf(a)=== b)
    .reduce((total, item)=> {
        return total + item + ", "
    },"")
console.log(uniqueContent.slice(0,-1));