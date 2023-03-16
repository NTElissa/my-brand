function AdminReadMoreMessage() {
  const id = new URLSearchParams(window.location.search).get('id');
  const container = document.querySelector('.messag');
  const deletebtn = document.querySelector('.delete');
  const messageId = document.querySelector('#id');
  const messageName = document.querySelector('#name');
  const messageEmail = document.querySelector('#email');
  const messageMessage = document.querySelector('#message');

  fetch(`http://localhost:5000/api/v1/message`)
    .then((resp) => resp.json())
    .then((data) => {
      messageId.innerHTML = data.data._id;
      messageName.innerHTML = data.data.name;
      messageEmail.innerHTML = data.data.email;
      messageMessage.innerHTML = data.data.message;
    })
    .catch((error) => console.log(error));
}
