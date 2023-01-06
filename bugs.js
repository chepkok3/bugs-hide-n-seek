/* Email form validation */

/* Access form field */

const form = document.querySelector('contact-form');

/* validate email function */

function containUppercase(str) {
  return /A-Z/.test(str);
}

/* event listener for email submission */

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailEntered = document.forms.contactMe.Email.value;
  if (containUppercase(emailEntered)) {
    document.querySelector('.error-information').innerText = 'There should be no capital letters in your email, please remove it!';
    return false;
  }
  return form.submit();
});
