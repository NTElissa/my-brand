function readMore(){
const id = new URLSearchParams( window.location.search).get('id');
const container= document.querySelector('.container');
const blogTitle=document.querySelector('#title')
const blogImage=document.querySelector('#image')
const blogBody=document.querySelector('#body')
// const  renderDetails = async () => {
  
 fetch(`http://localhost:5000/api/v1/blogs/${id}`)
 
  .then(resp => resp.json())
  
 .then (template =>{
  blogTitle.innerHTML = template.data.title
  blogImage.innerHTML = `<img src="${template.data.image}">`
  blogBody.innerHTML = template.data.body

}

)}




