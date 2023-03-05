const container=document.querySelector('.table_data');
const renderPosts = async () => {
    let uri='http://localhost:3000/posts';
    const res= await fetch(uri);
    const posts= await res.json();
   let template='';
   posts.forEach(post => {
    template +=  `
    
    <div class="inbox_infomation">
    <table border="1" class="table_data">
        <tr>
  <td><p class="id">${post.id}</p></td>
   <td><p class="title">${post.title.slice(0,200)} </p></td>
   
   <td><p class="time">12:00 am 12/20/2023 </p></td> 
   <td> <a href="/details.html?id=${post.id}">...Read More </a>  </p></td> 
</div></tr></table>
                       
    `
    
   })
   container.innerHTML = template;
}

 


window.addEventListener('DOMContentLoaded',()=> renderPosts());