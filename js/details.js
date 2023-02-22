const id = new URLSearchParams( window.location.search).get('id');
const container= document.querySelector('.details');
const deletebtn=document.querySelector('.delete');
const  renderDetails = async () => {
  
  const res= await fetch('http://localhost:3000/posts/' +id);
  const post = await res.json();
const template =
` 
<tr class="tr2">
<p class="no">${post.title}</p><br>
<p class="text">${post.body}</p>


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