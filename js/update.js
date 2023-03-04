const container = document.querySelector('form');

const updateBlog = async() => {
  const id = new URLSearchParams(window.location.search).get('id');
  const res = await fetch(`http://localhost:3000/posts/${id}`);
  const post = await res.json();
  const template = `
    <form>
      <input type="text" name="title" value="${post.title}" placeholder="ENTER AND TYPE TITLE" class="title_blog" required><br>
      <input type="text" name="image" value="${post.image}" placeholder="ENTER AND TYPE IMAGE" class="title_image" required><br>
      <textarea name="body" placeholder="ENTER AND TYPE BLOG" class="content" required>${post.body}</textarea>
      <button class="button_submit" onclick="updatePostNow()">UPDATE</button>
    </form>
  `;
  container.innerHTML = template;
}

const updatePostNow = async() => {
  const id = new URLSearchParams(window.location.search).get('id');
  const title = document.querySelector('input[name="title"]').value;
  const image = document.querySelector('input[name="image"]').value;
  const body = document.querySelector('textarea[name="body"]').value;

  const doc = {
    title: title,
    body: body,
    image: image,
  };

  await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(doc),
    headers: {
      'content-type': 'application/json'
    }
  });

  window.location.replace('admin_home.html');
}

container.addEventListener('submit', (event) => {
  event.preventDefault();
  updatePostNow();
});

window.addEventListener('DOMContentLoaded', updateBlog);
