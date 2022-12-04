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



function followerIncrementer() {
    profileData.numOfFollowers = profileData.numOfFollowers += 1;
    console.log(profileData);

    document.getElementById("myFollowerCount").innerHTML = profileData.numOfFollowers;
};

function followingIncrementer() {
    profileData.numOfFollowing = profileData.numOfFollowing += 1;
    console.log(profileData);

    document.getElementById("myFollowingCount").innerHTML = profileData.numOfFollowing;
};



document.getElementById("signup").onclick = function() {

    profileData.handle = document.getElementById("myHandle").value;
    profileData.name = document.getElementById("myName").value;
    profileData.DOB = document.getElementById("myDob").value;
    profileData['profile picture'] = document.getElementById("myProfilePic").value;
    profileData.bio = document.getElementById("myBio").value;
    
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



document.getElementById('signinButton').onclick = function() {
    let inputtedHandle = document.getElementById('signin').value;
    // could put this in its own separate function
    for (let key in allUsers) {
        if (key === inputtedHandle) {
            document.getElementById("myHandleOutput").innerHTML = allUsers[inputtedHandle].handle;
            document.getElementById("myNameOutput").innerHTML = allUsers[inputtedHandle].name;
            document.getElementById("myDobOutput").innerHTML = allUsers[inputtedHandle].DOB;
            document.getElementById("myProfilePicOutput").innerHTML = allUsers[inputtedHandle]['profile picture'];
            document.getElementById("myBioOutput").innerHTML = allUsers[inputtedHandle].bio;
            
            console.log('yo');
            break;
        }
        else {
            window.prompt('wrong handle inputted');
        }
    }
};


