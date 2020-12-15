//this code is a bit of a mess, but I think I sorta get it.
const server = {
    users =['Larry', 'Moe', 'Curly', 'Shemp'],
    profiles: {
        Larry: {
            last: 'Schmo1'
        },
        Moe: {
            last: 'Schmo2'
        },
        Curly: {
            last: 'Schmo3'
        },
        Shemp: {
            last: 'Schmo4'
        },
    },
    getUsers: function () {
        return new Promise((resolve, reject) => {
            resolve(this.users);
            Math.random() > .5 ? resolve(this.users) : reject(new Error)
        })
    },

    // getProfile: function() {
    //     return new Promise ((resolve, reject) => {
    //         resolve(this.users);
    //     })
    // }
    // getProfile: function (name, cb) {
    //     serTimeout( () => {
    //         console.log('time');
    //         //got lost about here
    //     }, Math.random() * 500);
    // }
}



// function localGetUsers() {
//     server.getUsers( function (users) {
//         console.log('call back', users);
//         server.getProfile(user[0], function (profile) {
//             console.log(profile);
//         });
//     });
// }

// localGetUsers();

//the above is shown how bad it used to be to get callback functions to wait for information from the server.
//Promises make this much easier.

// const getUsersPromise = new Promise(function (resolve, reject) {

//     server.getUsers( function (users) {
//         Math.random() > .5 ? resolve(users) : reject(new Error('server error'))
//     });
// });

// const usersPromise = server.getUsers();

// getUsersPromise.then( function (users) {
//     console.log(users);
//     const profilePromise = server.getProfile(users[0]);
//     profilePromise.then( users =>{
//         return server.getProfile(users[0]);
//     }. then( profile => {
//         console.log('profile', profile);
//     }))//fell behind on the typing
// }).catch( function (error) {
//     console.log(error);
// });

//there is even a better way to write. Use async.
async function login() {
    try {
        const users = await server.getUsers();
        const profile = await server.getProfile(users[1]);
        console.log(profile, 'profile');
    } catch (err) {
        console.log(err);
    };
};

login();



// const getProfilePromise = new Promise( function (resolve, reject) {

// })
// function ownFetch(url) {
//     return new Promise(resolve, reject) => {
//         const xhr = new HMLHttpRequest();
//         xhr.open('GET', 'https://google.com');
//         xhr.onload = function () {
//             console.log(xhr.responseText);
//         };
//         xhr.send(); //got lost here 
//     };
// };

//new way to write a request to an api
fetch(url).then(response => {
    console.log(response);
    response.json()
}).then(result => {
    console.log(result);
})

//if something is not a promise, you can wrap it into a promise, so you can use it in an asyncranous way.
//will have to read on this because I got lost in the instructor's code and then I got bored

//there is some stuff on Promise.all([]);
//this is useful if you want to do multiple things at once, so you don't have to wait as long
//waits until everything is uploaded before download