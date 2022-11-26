const form = document.getElementById('contact_form');
const email = document.getElementById('email');
const error = document.getElementById('error');

function check(event) {
  const formate = /^[a-z]+$/g;
  if (formate.test(event)) {
    form.submit();
  } else {
    error.innerHTML = ' Please provide valid email formate';
  }
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email1 = email.value.replace(/[^a-zA-Z0-9 ]/g, null);
  const email2 = email1.replace(/[0-9]/g, '');
  check(email2);
});
