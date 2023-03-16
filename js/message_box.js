function messageAdmin() {
    const container=document.querySelector('.table-page');
    fetch('http://localhost:5000/api/v1/message')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        const post = data.data; 
        for (let i = post.length - 1; i <= post.length ; i--) {
          // const date = new Date(post[i].createdAt); // get the post creation date
          // const formattedDate = `${date.getHours()}:${date.getMinutes()} ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
           let posts = `
          <div class="table-page">
          <table class="all_table" border="0">
           
          <tr class="tr2">
           <td class="id">${post[i]._id.slice(4,6)}</td>
           <td class="email">${post[i].email}</td>
          <td class="body_message">${post[i].message.slice(0,60)}<br> 
           <a href="/message_readmore.html?id=${post[i].id}"> Read more... </a> </td>
           <td class="date">${post[i].createdAt}</td>
             </tr>
                     
             </table></div>
          `;
          container.innerHTML += posts;
        }
      })
      .catch((error) => alert(error));
  }
  








// const renderPosts = async () => {
//     let uri='http://localhost:3000/messages';
//     const res= await fetch(uri);
//     const posts= await res.json();
//    let template='';
//    posts.forEach(post => {
//     template +=  `
//     <div class="table-page">
// <table class="all_table" border="0">
 
//     <tr class="tr2">
//         <td class="id">${post.id}</td>
//         <td class="email">${post.email}</td>
//         <td class="body_message">${post.message.slice(0,60)}<br> 
//         <a href="/message_readmore.html?id=${post.id}"> Read more... </a> </td>
//         <td class="date">${post.DateNow}</td>
//             </tr>
           
                   
// </table></div>

//     ` 
//    })
//    container.innerHTML = template;
// }


// window.addEventListener('DOMContentLoaded',()=> renderPosts());