function messageAdmin() {
  const container = document.querySelector('.message-page');
  fetch('https://nice-red-chipmunk-tam.cyclic.app/api/v1/message')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.data);
      const post = data.data;
     if (post && post.length > 0) { // Check if the post array is not empty
        for (let i = post.length - 1; i >= 0; i--) { // Fix the loop condition
          const date = new Date(post[i].createdAt); // get the post creation date
          const formattedDate = `${date.getHours()}:${date.getMinutes()} ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
        
          if (post[i]) { // Check if post[i] is defined
            let posts = `
              <div class="message-page">
                
                <p class="id">${post[i]._id.slice(0,0)}</p>
                    <p class="email">${post[i].email}</p>
                    <p class="body_message">${post[i].message.slice(0,200)}<br> 
                    <a href="/message_readmore.html?id=${post[i]._id}"> Read more... </a> </p>
                    <p class="date">${formattedDate}</p>
                
              </div>
            `;
            container.innerHTML += posts;
          }
        }
      } else {
        container.innerHTML = "No messages found.";
      }
    })
    .catch((error) => alert(error));
}

