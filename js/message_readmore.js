function AdminReadMoreMessage() {
  const id = new URLSearchParams(window.location.search).get('id');
  const container = document.querySelector('.messag');
  const deletebtn = document.querySelector('.delete');
  const messageId = document.querySelector('#id');
  const messageName = document.querySelector('#name');
  const messageEmail = document.querySelector('#email');
  const messageMessage = document.querySelector('#message');

  fetch(`http://localhost:5000/api/v1/message`)
  .then(resp => resp.json())
    .then(template => {
      messageId.innerHTML = template.data._id;
      messageName.innerHTML = template.data.name;
      messageEmail.innerHTML = template.data.email;
      messageMessage.innerHTML = template.data.message;
    });
   
    deleteMessage = async () => {
  const response = await fetch(`http://localhost:5000/api/v1/message/${id}`, {
    method: "DELETE",
  });
  window.location.href = "/admin_home.html"; // redirect to blogs page after deletion
}}
