const contactForm = () => {
  const form = document.querySelector('form');
  let f_name = document.getElementById('name');
  let email = document.getElementById('email');
  let subject = document.getElementById('subject');
  let message = document.getElementById('msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
      name: f_name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () {
      console.log(xhr.responseText);
      if (xhr.responseText == 'success') {
        alert('Email sent');
        f_name.value = '';
        email.value = '';
        message.value = '';
      } else {
        alert('Something went wrong');
      }
    };
    xhr.send(JSON.stringify(formData));
  });
};
export default contactForm;
