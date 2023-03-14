

async function userLogin(){
    const emailValue = document.getElementById("email").value
    const passwordValue = document.getElementById("password").value
    const data = {email: emailValue, password: passwordValue}
    // use fetch method to interact with your login api endpoint

    await fetch('http://localhost:5000/api/v1/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then ((response) => response.json())
        .then((data) => {
            console.log(data)
            if (data.message==="Logged in successfully") {
            
                alert(data.message)
                location.href="Admin_home.html" ; 
            } else {
                alert(data.message)
            }
        })
        .catch(err => alert(err))
};
