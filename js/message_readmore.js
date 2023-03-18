function AdminReadMoreMessage() {
  const id = new URLSearchParams(window.location.search).get('id');
  const container = document.querySelector('.messag');
  const deletebtn = document.querySelector('.delete');
  const messageId = document.querySelector('#id');
  const messageName = document.querySelector('#name');
  const messageEmail = document.querySelector('#email');
  const messageMessage = document.querySelector('#message');

  fetch(`https://nice-red-chipmunk-tam.cyclic.app/api/v1/message/${id}`)
  .then(resp => resp.json())
  .then(template => {
      messageId.innerHTML = template.data._id;
      messageName.innerHTML = template.data.name;
      messageEmail.innerHTML = template.data.email;
      messageMessage.innerHTML = template.data.message;
    });
   
    deleteMessage = async () => {
  const response = await fetch(`https://nice-red-chipmunk-tam.cyclic.app/api/v1/message/${id}`, {
    method: "DELETE",
  });
  window.location.href = "/admin_home.html"; // redirect to blogs page after deletion
}}
