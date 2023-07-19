import throttle from 'lodash.throttle';
const STORAGE_KAY = ".feedback-form"
const messageFromForm = {};

const refs = {
formEl : document.querySelector(".feedback-form"),
}

refs.formEl.addEventListener("submit", onFormSubmit )
refs.formEl.addEventListener("input",   throttle(onFormTextInput, 500));

addMessageFromLocalStorage()

function onFormSubmit (event){
event.preventDefault();

const messageFromForm = JSON.parse(localStorage.getItem("feedback-form-state"));
console.log(messageFromForm);

event.currentTarget.reset();
localStorage.removeItem("feedback-form-state");
}
 
function onFormTextInput (event){
messageFromForm[event.target.name] = event.target.value;

const messageForSave = JSON.stringify(messageFromForm)
localStorage.setItem("feedback-form-state", messageForSave)

}

function addMessageFromLocalStorage(){
const messageFromFormNew = JSON.parse(localStorage.getItem("feedback-form-state"));

    console.log(messageFromFormNew);

const {email, message} = messageFromFormNew;

if (email && message) {
 
refs.formEl.elements.email.value = email;
refs.formEl.elements.message.value = message;
}
}
