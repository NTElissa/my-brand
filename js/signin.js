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
                // Popup message for successful login
                const successMessage = document.createElement('div');
                successMessage.innerText = 'Login successful!';
                successMessage.style.backgroundColor = '#4CAF50';
                successMessage.style.color = '#fff';
                successMessage.style.padding = '10px';
                successMessage.style.textAlign = 'center';
                successMessage.style.margin = '10px';
                document.body.appendChild(successMessage);
                // Redirect to admin_home.html after successful login
                window.location.replace('admin_home.html');
            } else {
                // Popup message for unsuccessful login
                const errorMessage = document.createElement('div');
                errorMessage.innerText = data.message;
                errorMessage.style.backgroundColor = '#f44336';
                errorMessage.style.color = '#fff';
                errorMessage.style.padding = '10px';
                errorMessage.style.textAlign = 'center';
                errorMessage.style.margin = '10px';
                document.body.appendChild(errorMessage);
            }
        })
        .catch(err => {
            // Popup message for error
            const errorMessage = document.createElement('div');
            errorMessage.innerText = 'An error occurred, please try again later';
            errorMessage.style.backgroundColor = '#f44336';
            errorMessage.style.color = '#fff';
            errorMessage.style.padding = '10px';
            errorMessage.style.textAlign = 'center';
            errorMessage.style.margin = '10px';
            document.body.appendChild(errorMessage);
        })
};
