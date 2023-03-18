const form = document.querySelector('.form_contact');
 const createPost = async (e)=>{
    e.preventDefault();
    const doc={
        
        names:form.names.value,
        email:form.email.value,
        message:form.message.value,
     
    }
    await fetch('https://nice-red-chipmunk-tam.cyclic.app/api/v1/message',{
        method:'POST',
        body:JSON.stringify(doc),
        headers:{ 'content-type' : 'application/json' }
    });
    window.location.replace('index.html');
}
form.addEventListener('submit', createPost);