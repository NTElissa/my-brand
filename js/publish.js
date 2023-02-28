const container=document.querySelector('.publish_blog');
const postbtn=document.querySelector('.btn_publish');
const deletebtn=document.querySelector('.delete');
const renderPosts = async () => {
    let uri='http://localhost:3000/posts';
    const res= await fetch(uri);
    const posts= await res.json();
   let template='';
   posts.forEach(post => {
    template +=  `
 <div class="table-page">
        <table class="all_table" >
            <tr class="tr1">
        </tr>
            <tr class="tr2">
                <td class="no">${post.id}</td>
                <td class="title_message">${post.title.slice(0,20)}</td><br>
              
                 <td class="body_content">${post.body.slice(120,200)}</td><br>
                <td class="button_t">
          <button class="btn_publish">Publish</button>                                     
        </table></div>
                       

    `
    
   })
   container.innerHTML = template;
}


postbtn.addEventListener('click',async (e) =>{
    const res= await fetch('http://localhost:3000/posts/' +id,{
   method: 'POST',
    })
    window.location.replace('index.html');
   })


window.addEventListener('DOMContentLoaded',()=> renderPosts());