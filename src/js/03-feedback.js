const emailForm = document.querySelector(".feedback-form");
const inputValue = document.querySelector('[name="email"]');
const messageValue = document.querySelector('[name="message"]');
const buttonForSubmit = document.querySelector('button[type="submit"]');
const FEEDBACK_FROM_STATE = "feedback-form-state";

const onEmailForm = function (e) {
  localStorage.setItem(
    FEEDBACK_FROM_STATE,
    JSON.stringify({
      email: inputValue.value,
      message: messageValue.value,
    })
  );
};

const emailValueFromStorage = JSON.parse(
  localStorage.getItem(FEEDBACK_FROM_STATE)
).email;

const messageValueFromStorage = JSON.parse(
  localStorage.getItem(FEEDBACK_FROM_STATE)
).message;

if (emailValueFromStorage) {
  inputValue.value = emailValueFromStorage;
}
if (messageValueFromStorage) {
  messageValue.value = messageValueFromStorage;
}

function onSavingData(e) {
  e.preventDefault();
  console.log(`email: ${inputValue.value}, message: ${messageValue.value}`);
  emailForm.reset();
  localStorage.clear();
  emailForm.removeEventListener("input", onEmailForm);
}

emailForm.addEventListener("submit", onSavingData);
emailForm.addEventListener("input", onEmailForm);
