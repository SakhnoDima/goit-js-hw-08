import throttle from 'lodash.throttle';

const refs = {
formEl : document.querySelector(".feedback-form"),
}

refs.formEl.addEventListener("submit", onFormSubmit )
refs.formEl.addEventListener("input",   throttle(onFormTextInput, 500));

addMassegFromLocalStorage()

function onFormSubmit (event){
event.preventDefault();

const messageFromForm = JSON.parse(localStorage.getItem("feedback-form-state"));
console.log(messageFromForm);

event.currentTarget.reset();
localStorage.removeItem("feedback-form-state");
}

function onFormTextInput (event){
const {
    elements: { email, message}
  } = event.currentTarget;
const messageFromForm = {
    email : email.value,
    message : message.value
}

const messageForSave = JSON.stringify(messageFromForm)
localStorage.setItem("feedback-form-state", messageForSave)

console.log(message.value);
}

function addMassegFromLocalStorage(){
const messageFromForm = JSON.parse(localStorage.getItem("feedback-form-state"));

if (messageFromForm) {
 
const {email, message} = messageFromForm;

refs.formEl.elements.email.value = email;
refs.formEl.elements.message.value = message;
}
}
