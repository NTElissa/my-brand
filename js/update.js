const container= document.querySelector('form');
const updateBlog = async()=> {
    const id= new URLSearchParams(window.location.search).get('id');

 const res= await fetch('http://localhost:3000/posts/' +id);
const post = await res.json();
 const template =
  ` 
  <form>
    <input type="text" name="title"  value="${post.title}" placeholder="ENTER AND TYPE TITLE" class="title_blog" required ><br>
    <input type="text" name="image"   value="${post.image}" placeholder="ENTER AND TYPE IMAGE" class="title_image" required ><br>
    <textarea name="body" placeholder =" ENTER AND TYPE BLOG"  class="content"   required >${post.body}</textarea>
    <button class="button_submit" onclick="updatePostNow()"> UPDATE </button>
   </form>
     
  `
  container.innerHTML= template;
  }

  window.addEventListener('DOMContentLoaded', () => updateBlog());

const updatePostNow = async()=> {
    const title=document.getElementById('title').value;
    const image=document.getElementById('image').value;
    const body=document.getElementById('body').value;
    const id= new URLSearchParams(window.location.search).get('id');

    const doc={
      title:post.title.value,
      body:post.body.value,
      image:post.image.value,
  }
  await fetch('http://localhost:3000/posts',+id,{
      method:'PUT',
      body:JSON.stringify(doc),
      headers:{ 'content-type' : 'application/json' }
  });
window.location.replace('addblog.html');
}
container.addEventListener('submit', updatePostNow);

