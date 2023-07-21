import throttle from 'lodash.throttle';

const STORAGE_KAY = ".feedback-form"
let userData = JSON.parse(localStorage.getItem(STORAGE_KAY))  || {};
const refs = {
formEl : document.querySelector(STORAGE_KAY),
}


refs.formEl.addEventListener("submit", onFormSubmit )
refs.formEl.addEventListener("input",   throttle(onFormTextInput, 500));

addMessageFromLocalStorage()

// ?=======================================================
function onFormSubmit (event){
event.preventDefault();

console.log(userData);
event.currentTarget.reset();
localStorage.removeItem(STORAGE_KAY);
}
//  ?========================================================
function onFormTextInput (event){
userData[event.target.name] = event.target.value;

const messageForSave = JSON.stringify(userData)
localStorage.setItem(STORAGE_KAY, messageForSave)

}
// ?==========================================================
function addMessageFromLocalStorage(){

const {email, message} = userData;
console.log(232);
if (!email || !message) {
    return}
refs.formEl.elements.email.value = email;
refs.formEl.elements.message.value = message;

}
