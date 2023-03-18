function AdminReadMore() {
  const id = new URLSearchParams(window.location.search).get('id');
  const container = document.querySelector('.details');
  const deleteBtn = document.querySelector('.delete');
  const blogTitle = document.querySelector('#title');
  const blogImage = document.querySelector('#image');
  const blogBody = document.querySelector('#body');
  const edit =document.querySelector('.editbtn');

  fetch(`https://nice-red-chipmunk-tam.cyclic.app/api/v1/blogs/${id}`)
    .then(resp => resp.json())
    .then(template => {
      blogTitle.innerHTML = template.data.title;
      blogImage.innerHTML = `<img src="${template.data.image}">`;
      blogBody.innerHTML = template.data.body;
     edit.innerHTML= ` <button class="edit" onclick="updateBlog()">
         <a href="/update.html?id=${template.data._id}"> edit </a></button>`
    });

  deleteBlog = async () => {
    const response = await fetch(`https://nice-red-chipmunk-tam.cyclic.app/api/v1/blogs/${id}`, {
      method: "DELETE",
    });
    window.location.href = "/admin_home.html"; // redirect to blogs page after deletion
  }
}



