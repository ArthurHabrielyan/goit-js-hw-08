const throttle = require("lodash.throttle");

const emailForm = document.querySelector(".feedback-form");
const inputValue = document.querySelector('[name="email"]');
const messageValue = document.querySelector('[name="message"]');
const buttonForSubmit = document.querySelector('button[type="submit"]');
const FEEDBACK_FROM_STATE = "feedback-form-state";

console.log(JSON.parse(localStorage.getItem(FEEDBACK_FROM_STATE)));

const emailValueFromStorage =
  JSON.parse(localStorage.getItem(FEEDBACK_FROM_STATE)) &&
  JSON.parse(localStorage.getItem(FEEDBACK_FROM_STATE)).email;

const messageValueFromStorage =
  JSON.parse(localStorage.getItem(FEEDBACK_FROM_STATE)) &&
  JSON.parse(localStorage.getItem(FEEDBACK_FROM_STATE)).message;

if (emailValueFromStorage) {
  inputValue.value = emailValueFromStorage;
}
if (messageValueFromStorage) {
  messageValue.value = messageValueFromStorage;
}

const onEmailForm = function (e) {
  console.log(inputValue.value, messageValue.value);
  localStorage.setItem(
    FEEDBACK_FROM_STATE,
    JSON.stringify({
      email: inputValue.value,
      message: messageValue.value,
    })
  );
};

throttle(onEmailForm, 500);

function onSavingData(e) {
  e.preventDefault();
  console.log(`email: ${inputValue.value}, message: ${messageValue.value}`);
  emailForm.reset();
  localStorage.clear();
}

emailForm.addEventListener("submit", onSavingData);
emailForm.addEventListener("input", onEmailForm);
