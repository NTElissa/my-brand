const container=document.querySelector('.table-page');

const renderPosts = async () => {
    let uri='http://localhost:3000/messages';
    const res= await fetch(uri);
    const posts= await res.json();
   let template='';
   posts.forEach(post => {
    template +=  `
    <div class="table-page">
<table class="all_table" border="0">
 
    <tr class="tr2">
        <td class="id">${post.id}</td>
        <td class="email">${post.email}</td>
        <td class="body_message">${post.message.slice(0,60)}<br> 
        <a href="/message_readmore.html?id=${post.id}"> Read more... </a> </td>
        <td class="date">${post.DateNow}</td>
            </tr>
           
                   
</table></div>

    ` 
   })
   container.innerHTML = template;
}


window.addEventListener('DOMContentLoaded',()=> renderPosts());