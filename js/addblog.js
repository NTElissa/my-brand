const form = document.querySelector('form');
 const createPost = async (e)=>{
    e.preventDefault();
    const doc={
        title:form.title.value,
        body:form.body.value,
        image:form.body.value,
     
    }
    await fetch('http://localhost:3000/posts',{
        method:'POST',
        body:JSON.stringify(doc),
        headers:{ 'content-type' : 'application/json' }
    });
  window.location.replace('admin_home.html');
}
form.addEventListener('submit', createPost);
