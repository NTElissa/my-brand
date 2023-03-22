const form = document.querySelector('form');
 const createPost = async (e)=>{
    e.preventDefault();
    const doc={
        title:form.title.value,
        body:form.body.value,
        image:form.image.value,
     
    }
    await fetch('https://nice-red-chipmunk-tam.cyclic.app/api/v1/blogs',{
        method:'POST',
        body:JSON.stringify(doc),
        headers:{ 'content-type' : 'application/json' }
    });
   window.location.replace('admin_home.html');
  // alert("Blog sent to database")
  //toas message 
  Toastify({
    text: "Your blogs has been added successfully",
    backgroundColor: "green",
    className: "toastify-success",
  }).showToast();
}
form.addEventListener('submit', createPost);
