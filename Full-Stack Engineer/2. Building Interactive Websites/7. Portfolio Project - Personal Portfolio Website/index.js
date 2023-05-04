const myName = document.getElementById('myName');

let titleName = document.createElement('h2');
titleName.innerHTML = 'My name 😁';

myName.addEventListener('click', () => {
  console.log('This is an Easter Egg');
  myName.appendChild(titleName);
})