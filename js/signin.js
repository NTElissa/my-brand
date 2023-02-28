


users = JSON.parse(localStorage.getItem('users')) || [];
console.log(users)


function logedin(){
    // check if user exists
    let password=document.getElementById("password");
    let targetUser = users.find(user => user.password == password.value);
    console.log("Target user"+targetUser);

    if(targetUser)  {
        // localStorage.setItem('currentUser', JSON.stringify(targetUser))
        return true;
    }
    else{
        alert("wrong password or email is wong\n\n or sign up");
        // console.log("Password" + targetUser.password);
    }
    return false;
}