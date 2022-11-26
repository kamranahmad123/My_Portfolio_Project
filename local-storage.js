const dataInput = document.getElementById('email');
const username = document.getElementById('username');
const message = document.getElementById('message');
const storedObject = {};
username.addEventListener('change', () => {
  storedObject.username = username.value;
  storedObject.dataInput = dataInput.value;
  storedObject.message = message.value;
  const serializedObject = JSON.stringify(storedObject);
  localStorage.setItem('Data', serializedObject);
});
dataInput.addEventListener('change', () => {
  storedObject.username = username.value;
  storedObject.dataInput = dataInput.value;
  storedObject.message = message.value;
  const serializedObject = JSON.stringify(storedObject);
  localStorage.setItem('Data', serializedObject);
});
message.addEventListener('change', () => {
  storedObject.username = username.value;
  storedObject.dataInput = dataInput.value;
  storedObject.message = message.value;
  const serializedObject = JSON.stringify(storedObject);
  localStorage.setItem('Data', serializedObject);
});

function fillData() {
  const desirializedObject = JSON.parse(localStorage.getItem('Data'));
  username.value = desirializedObject.username;
  dataInput.value = desirializedObject.dataInput;
  message.value = desirializedObject.message;
}
window.addEventListener('load', fillData);