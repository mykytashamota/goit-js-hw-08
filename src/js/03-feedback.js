import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const refs = {
  form: document.querySelector(".feedback-form"),
  textarea: document.querySelector(".feedback-form textarea"),
  input: document.querySelector(".feedback-form input"),
};

let formData = {};
populateTextarea();

refs.form.addEventListener("submit", onFromSubmit);

function onFromSubmit(e) {
  e.preventDefault();
  if ((refs.input.value && refs.textarea.value) === "") {
    return alert("Please fill in both lines ");
  } else {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
  }
}

function populateTextarea() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveMessage) {
    for (const key in saveMessage) {
      formData[key] = saveMessage[key];
      refs.form.elements[key].value = saveMessage[key];
    }
  }
}

refs.form.addEventListener(
  "input",
  throttle((event) => {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

