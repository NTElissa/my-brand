// get model box
const modelBox = document.getElementById("mod_box");
// get form 
const newForm = document.getElementById("edit_form");

// hide mod_box 
modelBox.style.display = "none";


// fun to open model with content of selected article
const OpenModel = async (id) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`);

    const blog = await response.json();
    // show model box
    modelBox.style.display = "block";
    // set input values from server
    newForm.title.value = blog.title;
    newForm.body.value = blog.body;
    newForm.image.value = blog.image;
    articleID = blog.id;

}


const updatingPost = async () => {

    const post = {
        title: newForm.title.value,
        body: newForm.cat.value,
       image: newForm.file.value,
    }

    const response = await fetch(`http://localhost:3000/posts/${articleID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post),

    });
    alert("Your blog has been Updated successfully!!!!")
}

if (newForm != null) {
    newForm.addEventListener("submit", (e) => {
        e.preventDefault();
        updatingPost();
    })
}
window.addEventListener("DOMContentLoaded", () => renderDetails());
