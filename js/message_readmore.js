const id = new URLSearchParams( window.location.search).get('id');
const container= document.querySelector('.messag');
const deletebtn=document.querySelector('.delete');

const  renderDetails = async () => {
  
  const res= await fetch('http://localhost:3000/messages/' +id);
  const post = await res.json();
const template =
` 
<div class="messag">
<p class="title">${post.id}</p><br>
<p class="title">${post.email}</p><br>
<p class="title">${post.names}</p><br>
<p class="title">${post.message}</p><br>


</div>

`
container.innerHTML= template;
}
deletebtn.addEventListener('click',async (e) =>{
const res= await fetch('http://localhost:3000/messages/' +id,{
 method: 'DELETE'
  })
  window.location.replace('admin_home.html');
 }) 

window.addEventListener('DOMContentLoaded', () => renderDetails());