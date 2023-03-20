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
           <p class="title_blog1">${post[i].title}
          <img src="${post[i].image}"><b>
        
        <p>  ${post[i].body}
          </p>
    </div> ` 
    container.innerHTML += posts ;
    }})
    .catch((error)=> alert(error));
}