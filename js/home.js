function blogsRetrieve(){
const container=document.querySelector('.all_blogs');
fetch("http://localhost:5000/api/v1/blogs")
.then((res)=>{
   return res.json();
})
.then((data)=>{
   console.log(data.data)
    const post =data.data;
    for (let i = post.length - 1; i >= post.length - 3; i--){
      let posts = `
      <div class="all_blogs">
  <div class="blog1">
  <img src="${post[i].image}">
 <p class="title_blog1">
 ${post[i].body.slice(0,40)}
 </p>
 <a  href="/homeReadMore.html?id=${post[i]._id}" class="bolog_sign1" ><h1> >> </h1></a></div>


    
 `

 
container.innerHTML += posts ;

    }

})
.catch((error)=> alert(error));

// const renderPosts = async () => {
//     let uri='http://localhost:5000/api/v1/blogs';
//     const res= await fetch(uri);
//     const posts= await res.json();
//    let template='';
//    posts.forEach(post => {
//     template +=  `
  
//   <div class="all_blogs">
//   <div class="blog1">
//   <img src="${post.image}">
//  <p class="title_blog1">
//  ${post.body.slice(0,40)}
//  </p>
//  <a  href="/homeReadMore.html?id=${post.id}" class="bolog_sign1" ><h1> >> </h1></a></div>


// //     ` 

// //    })

// //    container.innerHTML = template;
// // }

// window.addEventListener('DOMContentLoaded',()=> renderPosts());
}