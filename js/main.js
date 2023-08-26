// sign up
let nameSignUpEl = document.querySelector("#nameSignUpEl");
let emailSignUpEl = document.querySelector("#emailSignUpEl");
let passwordSignUpEl = document.querySelector("#passwordSignUpEl");
let signUpBtn = document.querySelector("#signUpBtn");
let successAlert = document.querySelector("#successAlert");
let signInPage = document.querySelector("#signInPage");
let requirAlert = document.querySelector("requirAlert");
let alertExist = document.querySelector("#isExistmodel.modelBox");
let alertValid = document.querySelector("#isvalidmodel.modelBox");
let existCloseEl = document.querySelector("#existCloseEl");
let validCloseEl = document.querySelector("#validCloseEl");
let userNameText = document.querySelectorAll("#userNameText h2");

let usersInfoList = [];
if (localStorage.getItem("usersData") != null) {
  usersInfoList = JSON.parse(localStorage.getItem("usersData"));
}

signUpBtn.addEventListener("click", signUp);
function signUp() {
  isValid();
  isExist();
  if (isValid() == true && isExist() == false) {
    let userInfo = {
      userName: nameSignUpEl.value,
      userEmail: emailSignUpEl.value,
      userPassword: passwordSignUpEl.value,
    };
    usersInfoList.push(userInfo);
    localStorage.setItem("usersData", JSON.stringify(usersInfoList));
    successAlert.classList.replace("d-none", "d-block");
    signInPage.classList.replace("d-none", "d-block");
  } else if (isValid() == false) {
    alertValid.style.display = "flex";
  }
}
existCloseEl.addEventListener("click", function () {
  alertExist.style.display = "none";
});
validCloseEl.addEventListener("click", function () {
  alertValid.style.display = "none";
});
nameSignUpEl.addEventListener("blur", validName);
function validName() {
  let alertName = document.querySelector("#alertName");
  let ragex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;
  if (ragex.test(nameSignUpEl.value) == true) {
    nameSignUpEl.classList.add("is-valid");
    nameSignUpEl.classList.remove("is-invalid");
    alertName.classList.replace("d-block", "d-none");
    return true;
  } else {
    nameSignUpEl.classList.add("is-invalid");
    nameSignUpEl.classList.remove("is-valid");
    alertName.classList.replace("d-none", "d-block");
    return false;
  }
}
emailSignUpEl.addEventListener("blur", validEmail);
function validEmail() {
  let alertEmail = document.querySelector("#alertEmail");
  let ragex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (ragex.test(emailSignUpEl.value) == true) {
    emailSignUpEl.classList.add("is-valid");
    emailSignUpEl.classList.remove("is-invalid");
    alertEmail.classList.replace("d-block", "d-none");
    return true;
  } else {
    emailSignUpEl.classList.add("is-invalid");
    emailSignUpEl.classList.remove("is-valid");
    alertEmail.classList.replace("d-none", "d-block");
    return false;
  }
}
passwordSignUpEl.addEventListener("blur", validPass);
function validPass() {
  let alertPass = document.querySelector("#alertPassword");
  let ragex = /^.{8,20}$/;
  if (ragex.test(passwordSignUpEl.value) == true) {
    passwordSignUpEl.classList.add("is-valid");
    passwordSignUpEl.classList.remove("is-invalid");
    alertPass.classList.replace("d-block", "d-none");
    return true;
  } else {
    passwordSignUpEl.classList.add("is-invalid");
    passwordSignUpEl.classList.remove("is-valid");
    alertPass.classList.replace("d-none", "d-block");
    return false;
  }
}
function isValid() {
  validName();
  validEmail();
  validPass();
  if (validName() == true && validEmail() == true && validPass() == true) {
    return true;
  } else {
    return false;
  }
}
function isExist() {
  for (let i = 0; i < usersInfoList.length; i++) {
    if (
      usersInfoList[i].userEmail.toLowerCase() ==
      emailSignUpEl.value.toLowerCase()
    ) {
      alertExist.style.display = "flex";
      return true;
    }
  }
  return false;
}

