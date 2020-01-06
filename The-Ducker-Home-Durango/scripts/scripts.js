let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/house-front-summer.jpg') {
      myImage.setAttribute ('src','images/house-front-winter.jpg');
    } else {
      myImage.setAttribute ('src','images/house-front-summer.jpg');
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function() {
    setUserName();
  }
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');    
    if(!myName || myName === null) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'The Ducker Home, Durango...Welcome ' + myName;
      }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'The Ducker Home, Durango...Welcome ' + storedName;
  }