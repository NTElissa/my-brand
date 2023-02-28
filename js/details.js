const id = new URLSearchParams( window.location.search).get('id');
const container= document.querySelector('.details');
const deletebtn=document.querySelector('.delete');

const  renderDetails = async () => {
  
  const res= await fetch('http://localhost:3000/posts/' +id);
  const post = await res.json();
const template =
` 
<tr class="tr2">
<p class="title">${post.title}</p><br>
<img src="${post.image}"><br>
<p>${post.body}<p>
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



const updateBlog = async() =>{
  const ulrParams = new URLSearchParams(window.location.search);
  if(ulrParams.has('id')){
    
    const blogId = ulrParams.get('id');
    document.getElementById('add_article').textContent = "Edit article ";
    const res= await fetch('http://localhost:3000/posts/' +blogId);
    const blog = await res.json();
    let title = document.querySelector('.title_blog').value = blog.title;
    let image = document.querySelector('.title_image').value = blog.image;
    let content = document.querySelector('.content').value = blog.body;
  }window.location('addlog.html');
}



