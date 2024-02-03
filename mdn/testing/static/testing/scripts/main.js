const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    console.log(mySrc);
    if (mySrc === "/static/testing/images/Mozilla_Firefox_logo_2013.png") {
        myImage.setAttribute('src', "static/testing/images/wef.jpg")
    } else {
        myImage.setAttribute('src', "/static/testing/images/Mozilla_Firefox_logo_2013.png");
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
