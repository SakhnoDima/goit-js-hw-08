import throttle from 'lodash.throttle';
const STORAGE_KAY = ".feedback-form"
const messageFromForm = {};

const refs = {
formEl : document.querySelector(STORAGE_KAY),
}

refs.formEl.addEventListener("submit", onFormSubmit )
refs.formEl.addEventListener("input",   throttle(onFormTextInput, 500));

addMessageFromLocalStorage()

function onFormSubmit (event){
event.preventDefault();

const messageFromForm = JSON.parse(localStorage.getItem(STORAGE_KAY));
console.log(messageFromForm);

event.currentTarget.reset();
localStorage.removeItem(STORAGE_KAY);
}
 
function onFormTextInput (event){
messageFromForm[event.target.name] = event.target.value;

const messageForSave = JSON.stringify(messageFromForm)
localStorage.setItem(STORAGE_KAY, messageForSave)

}

function addMessageFromLocalStorage(){
const messageFromFormNew = JSON.parse(localStorage.getItem(STORAGE_KAY));

    console.log(messageFromFormNew);

const {email, message} = messageFromFormNew;
if (email && message) {
refs.formEl.elements.email.value = email;
refs.formEl.elements.message.value = message;
}
}
