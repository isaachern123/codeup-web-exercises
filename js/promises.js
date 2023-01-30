(async function () {

// function getCommit() {
//     return fetch('data/docrob_github_events.json')
//         .then((response) => response.json())
//         .then((data) => data)
// }

function getCommit(userName, apiKey) {
    const url = `https://api.github.com/users/${userName}/events/public`
    return fetch(url, {headers: {'Authorization': `token ${apiKey}`}})
        .then(response => response.json())
        .then(function (data) {
            return data.filter(function (event) {
                return event.type === 'PushEvent'
            })[0].created_at
        })
}

const lastCommitDate = await getCommit('isaachern123', GITHUB_API_KEY)
    console.log(lastCommitDate)


function wait(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('howdy')
        }, ms)
    })
}

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

})();