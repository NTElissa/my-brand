
      const blogListElement = document.getElementById('blog-list');
      const blogFormElement = document.getElementById('blog-form');
      const blogIdElement = document.getElementById('blog-id');
      const blogTitleElement = document.getElementById('blog-title');
      const blogContentElement = document.getElementById('blog-content');
      const blogAuthorElement = document.getElementById('blog-author');
      const cancelButtonElement = document.getElementById('cancel-button');
      
      // Define the URL of the blogs
      const blogsUrl = 'http://localhost:3000/blogs';
      
      // Function to display the blog list
      function displayBlogList() {
        // Clear the blog list element
        blogListElement.innerHTML = '';
        
        // Fetch the blogs from the server
        fetch(blogsUrl)
          .then(response => response.json())
          .then(blogs => {
            // Loop through the blogs and create a list item for each one
            blogs.forEach(blog => {
              const listItemElement = document.createElement('li');
              const editButtonElement = document.createElement('button');
              
              editButtonElement.innerText = 'Edit';
              editButtonElement.addEventListener('click', event => {
                event.preventDefault();
                displayBlogForm(blog);
              });
              
              listItemElement.innerText = `${blog.title} by ${blog.author} `;
              listItemElement.appendChild(editButtonElement);
              
              blogListElement.appendChild(listItemElement);
            });
          })
          .catch(error => console.error(error));
      }
      
      // Function to display the blog form
      function displayBlogForm(blog) {
        blogIdElement.value = blog.id;
        blogTitleElement.value = blog.title;
        blogContentElement.value = blog.content;
        blogAuthorElement.value = blog.author;
        
        cancelButtonElement.addEventListener('click', event => {
          event.preventDefault();
          displayBlogList();
        });
        
        blogFormElement.addEventListener('submit');}
