// example for first step

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
const profileData = {
    handle: '',  
    name: '',
    DOB: '',
    'profile picture':'',
    numOfFollowers: 100,
    numOfFollowing: 74,
    bio: '',
};

console.log(profileData);

// like so
// let myHandleInput = document.getElementById("myHandle").value;

document.getElementById("myHandleButton").onclick = function() {
    // can store this in a variable called myHandleInput outside of the function
    // then just set profileData.handle = myHandleInput;
    // this make the code run more efficiently; calling a function everytime we want to change th evalue isnt efficient 
    // so setting the function equal to a variable makes it more efficient 
    profileData.handle = document.getElementById("myHandle").value;
    console.log(profileData);
}

// once the button is clicked then this function will execute the code
// the function saves the value that is entered, into the key that is called, which reassigns that key value
document.getElementById("myNameButton").onclick = function() {
    profileData.name = document.getElementById("myName").value;
    console.log(profileData);
}

document.getElementById("myDobButton").onclick = function() {
    profileData.DOB = document.getElementById("myDob").value;
    console.log(profileData);
}

document.getElementById("myProfilePicButton").onclick = function() {
    profileData['profile picture'] = document.getElementById("myProfilePic").value;
    console.log(profileData);
}

document.getElementById("myBioButton").onclick = function() {
    profileData.bio = document.getElementById("myBio").value;
    console.log(profileData);
}