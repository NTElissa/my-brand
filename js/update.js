const container = document.querySelector('form');

// This function will get the existing blog post data from the server
function getUpdate() {
  const blogTitle = document.querySelector("#title");
  const blogImage = document.querySelector("#image");
  const blogBody = document.querySelector("#body");

  const id = new URLSearchParams(window.location.search); 
  const editBlogs = id.get('id');
  console.log(editBlogs);

  fetch(`https://nice-red-chipmunk-tam.cyclic.app/api/v1/blogs/${editBlogs}`)
    .then(res => res.json())
    .then(template => {
      blogTitle.value = template.data.title;
      blogImage.value = template.data.image;
      blogBody.value = template.data.body;
    })
    .catch(error => {
      console.error(error);
    });
}

// This function will update the existing blog post data
async function updatePostNow() {
  const id = new URLSearchParams(window.location.search); 
  const editBlogs = id.get('id');
  const title = document.querySelector('#title').value;
  const image = document.querySelector('#image').value;
  const body = document.querySelector('#body').value;

  const doc = {
    title: title,
    body: body,
    image: image,
  };

  try {
    const response = await fetch(`https://nice-red-chipmunk-tam.cyclic.app/api/v1/blogs/${editBlogs}`, {
      method: 'PUT',
      body: JSON.stringify(doc),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    window.location.replace('admin_home.html');
  } catch (error) {
    console.error('Error:', error);
  }
}

container.addEventListener('submit', (event) => {
  event.preventDefault();
  updatePostNow();
});

window.addEventListener('DOMContentLoaded', getUpdate);
