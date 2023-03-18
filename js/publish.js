function blogsRetrieve(){
    const container=document.querySelector('.publish_blog');
    fetch("https://nice-red-chipmunk-tam.cyclic.app/api/v1/blogs")
    .then((res)=>{
       return res.json();
    })
    .then((data)=>{
       console.log(data.data)
        const post =data.data;
        for (let i = post.length - 1; i >= post.length - 3; i--){
          let posts = `
          <div class="publish_blog">

          <img src="${post[i].image}">
          <p class="title_blog1">
          ${post[i].body}
          </p>
    </div> ` 
    container.innerHTML += posts ;
    }})
    .catch((error)=> alert(error));
}