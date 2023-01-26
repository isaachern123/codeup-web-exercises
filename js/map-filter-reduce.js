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

let threeLang = users.filter(function (user) {
    return user.languages.length > 2;
})
console.log(threeLang)

let emailArray = users.map(function(user) {
    return user.email
})
console.log(emailArray)

const averageExperience = users.reduce((total, user) => {
    return total + user.yearsOfExperience / 5;
}, 0);

console.log(averageExperience)

const longestEmail = users.reduce((email, user)=>(email.length > user.email.length) ? email : user.email, '')

console.log(longestEmail)

const userNames = users.reduce((InString, user)=> {
    return InString + user.name
},'')

console.log(userNames)
