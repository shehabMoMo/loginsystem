let emailSigninEl = document.querySelector("#emailSigninEl");
let passwordSigninEl = document.querySelector("#passwordSigninEl");
let signinBtn = document.querySelector('#signinBtn')
let alertError = document.querySelector("#alertError")
let usersDataList = []
let nam =''
if (localStorage.getItem("usersData") != null) {
    usersDataList = JSON.parse(localStorage.getItem("usersData"));
  }
  signinBtn.addEventListener('click',login)
function login() {
    for (let i = 0; i < usersDataList.length; i++) {
      if (usersDataList[i].userEmail.toLowerCase() == emailSigninEl.value.toLowerCase() &&
      usersDataList[i].userPassword.toLowerCase() == passwordSigninEl.value.toLowerCase() ) {
          window.location.assign('home.html')
        alertError.classList.replace('d-block','d-none')
        localStorage.setItem('userName',usersDataList[i].userName)
          break;
      }
      else{
          alertError.classList.replace('d-none','d-block')
      }
    }
  }