const form = document.querySelector('.form_contact');
 const createPost = async (e)=>{
    e.preventDefault();
    const doc={
        
        names:form.names.value,
        email:form.email.value,
        message:form.message.value,
     
    }
    await fetch('http://localhost:3000/messages',{
        method:'POST',
        body:JSON.stringify(doc),
        headers:{ 'content-type' : 'application/json' }
    });
}
form.addEventListener('submit', createPost);