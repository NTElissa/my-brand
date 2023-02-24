const form = document.querySelector('form');
 const createPost = async (e)=>{
    e.preventDefault();
    const doc={
        title:form.title.value,
        body:form.body.value,
     
    }
    await fetch('http://localhost:3000/posts',{
        method:'POST',
        body:JSON.stringify(doc),
        headers:{ 'content-type' : 'application/json' }
    });
  window.location.replace('message_box.html');
}
form.addEventListener('submit', createPost);