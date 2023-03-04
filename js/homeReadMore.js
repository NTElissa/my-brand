const id = new URLSearchParams( window.location.search).get('id');
const container= document.querySelector('.container');

const  renderDetails = async () => {
  
  const res= await fetch('http://localhost:3000/posts/' +id);
  const post = await res.json();
const template =
` 
<p class="title">${post.title}</p><br>
<img src="${post.image}"><br>
<p>${post.body}<p>
    
`
container.innerHTML= template;
}
window.addEventListener('DOMContentLoaded', () => renderDetails());





