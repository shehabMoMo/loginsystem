
let userName = document.querySelector('#userNameText')
console.log(localStorage.getItem('userName'));
temp = `<h2>${localStorage.getItem('userName')}</h2>
<h2>${localStorage.getItem('userName')}</h2>`
userName.innerHTML = temp