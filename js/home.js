const container=document.querySelector('.all_blogs');
const renderPosts = async () => {
    let uri='http://localhost:3000/posts';
    const res= await fetch(uri);
    const posts= await res.json();
   let template='';
   posts.forEach(post => {
    template +=  `
  
  <div class="all_blogs">
  <div class="blog1">
  <img src="${post.image}">
 <p class="title_blog1">
 ${post.body.slice(0,40)}
 </p>
 <a  href="/homeReadMore.html?id=${post.id}" class="bolog_sign1" ><h1> >> </h1></a></div>


    ` 

   })

   container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded',()=> renderPosts());