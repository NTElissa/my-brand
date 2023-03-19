

async function userLogin(){
    const emailValue = document.getElementById("email").value
    const passwordValue = document.getElementById("password").value
    const data = {email: emailValue, password: passwordValue}
    // use fetch method to interact with your login api endpoint

    await fetch('https://nice-red-chipmunk-tam.cyclic.app/api/v1/login', {
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
                window.location.replace('./admin_home.html');
            } else {
                alert(data.message)
            }
        })
        .catch(err => alert(err))
};
