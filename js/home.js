const container=document.querySelector('.all_blog');
const renderPosts = async () => {
    let uri='http://localhost:3000/posts';
    const res= await fetch(uri);
    const posts= await res.json();
   let template='';
   posts.forEach(post => {
    template +=  `
    <div class="all_blog">
    <div class="blog_to">
    ${post.image}
  <p class="t_box_a">
   ${post.body.slice(0,20)}
  </p>
  <a  href="#" class="box_sign_a" ><h1> >> </h1></a></div>
  
  </div>

    ` 
   })
   container.innerHTML = template;
}

window.addEventListener('DOMContentLoaded',()=> renderPosts());