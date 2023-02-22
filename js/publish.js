const container=document.querySelector('.publish_blog');
const renderPosts = async () => {
    let uri='http://localhost:3000/posts';
    const res= await fetch(uri);
    const posts= await res.json();
   let template='';
   posts.forEach(post => {
    template +=  `
 <div class="table-page">
        <table class="all_table"  >
            <tr class="tr1">
        </tr>
            <tr class="tr2">
                <td class="no">${post.id}</td>
                <td class="text">${post.title}</td>
              
                 <td class="time">${post.body}</td>
                <td class="button_t">
          <button class="btn_publish">Publish</button></td>
            
                    
                    
                                    
                                       
        </table></div>
                       

    `
    
   })
   container.innerHTML = template;
}

 


window.addEventListener('DOMContentLoaded',()=> renderPosts());