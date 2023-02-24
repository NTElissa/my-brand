const id = new URLSearchParams( window.location.search).get('id');
const container= document.querySelector('.details');
const deletebtn=document.querySelector('.delete');

const  renderDetails = async () => {
  
  const res= await fetch('http://localhost:3000/posts/' +id);
  const post = await res.json();
const template =
` 
<tr class="tr2">
<p class="title">${post.title.slice(0,20)}</p><br>
<div class="image">${post.image}</div><br>

<p>${post.body.slice(120,2000)}<p>


   </tr>
`
container.innerHTML= template;
}
deletebtn.addEventListener('click',async (e) =>{
const res= await fetch('http://localhost:3000/posts/' +id,{
 method: 'DELETE'
  })
  window.location.replace('admin_home.html');
 }) 

window.addEventListener('DOMContentLoaded', () => renderDetails());