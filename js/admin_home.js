function adminHome() {
  const container = document.querySelector('.table_data');
  fetch('https://nice-red-chipmunk-tam.cyclic.app/api/v1/blogs')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.data);
      const post = data.data; 
      document.getElementById('blog_count').innerHTML = post.length; // update blog count
      for (let i = post.length - 1; i >= 0 ; i--) {
        const date = new Date(post[i].createdAt); // get the post creation date
        const formattedDate = `${date.getHours()}:${date.getMinutes()} ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
        let posts = `
          <div class="inbox_infomation">
            <table border="1" class="table_data">
              <tr>
                <td><p class="id">${post[i]._id.slice(4,6)}</p></td>
                <td><p class="title">${post[i].title.slice(0, 200)}</p></td>
                <td><p class="time">${formattedDate}</p></td>
                <td><a href="/details.html?id=${post[i]._id}">...Read More</a></td> 
              </tr>
            </table>
          </div>
        `;
        container.innerHTML += posts;
      }
    })
    .catch((error) => alert(error));
}
