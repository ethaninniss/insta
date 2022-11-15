// example for first step

// const users = {
//     'javascriptguru': {
//         handle: 'javascriptguru',
//         name: 'js guru',
//         DOB: 1 / 1 / 2000,
//         'profile picture': 'pic.png',
//         numOfFollowers: 100,
//         numOfFollowing: 75,
//         bio: 'i am a java script guru.'
//     }
// }

// const user = users['javascriptguru']
//  /* user = {
//         handle: 'javascriptguru',
//         name: 'js guru',
//         DOB: 1 / 1 / 2000,
//         'profile picture': 'pic.png',
//         numOfFollowers: 100,
//         numOfFollowing: 75,
//         bio: 'i am a java script guru.'
//     }
//     */


const test1 = function() {
    const profileData = {
        handle: 'javascriptguru',
        name: 'js guru',
        DOB: 1 / 1 / 2000,
        'profile picture': 'pic.png',
        numOfFollowers: 100,
        numOfFollowing: 75,
        bio: 'i am a java script guru.'
    };

    console.log(profileData);
    console.log(profileData.bio);
}
// example for second step

const test2 = function() {
    const profileData = {
        handle: window.prompt('what is your insta handle?'),
        name: window.prompt('What is your name?'),
        DOB: window.prompt('What is your DOB?'),
        'profile picture': window.prompt('Link a profile pic.'),
        numOfFollowers: 100,
        numOfFollowing: 75,
        bio: window.prompt('Input a bio about you.')
    };

    console.log(profileData);
}
// example for third step
let profileData = {
    handle: null,
    name: null,
    DOB: null,
    'profile picture': null,
    numOfFollowers: 0,
    numOfFollowing: 0,
    bio: null,
};

const allUsers = {}

console.log(profileData);

document.getElementById("myFollowerButton").onclick = function() {
    profileData.numOfFollowers = profileData.numOfFollowers += 1;
    console.log(profileData);

    document.getElementById("myFollowerCount").innerHTML = profileData.numOfFollowers;
};

document.getElementById("myFollowingButton").onclick = function() {
    profileData.numOfFollowing = profileData.numOfFollowing += 1;
    console.log(profileData);

    document.getElementById("myFollowingCount").innerHTML = profileData.numOfFollowing;
};

document.getElementById("signup").onclick = function() {

    profileData.handle = document.getElementById("myHandle").value;
    document.getElementById("myHandleOutput").innerHTML = profileData.handle;

    profileData.name = document.getElementById("myName").value;
    document.getElementById("myNameOutput").innerHTML = profileData.name;

    profileData.DOB = document.getElementById("myDob").value;
    document.getElementById("myDobOutput").innerHTML = profileData.DOB;

    profileData['profile picture'] = document.getElementById("myProfilePic").value;
    document.getElementById("myProfilePicOutput").innerHTML = profileData['profile picture'];

    profileData.bio = document.getElementById("myBio").value;
    document.getElementById("myBioOutput").innerHTML = profileData.bio;

    allUsers[profileData.handle] = profileData;

    profileData = {
        handle: null,  
        name: null,
        DOB: null,
        'profile picture': null,
        numOfFollowers: 0,
        numOfFollowing: 0,
        bio: null,
    };

    console.log(allUsers)
}
