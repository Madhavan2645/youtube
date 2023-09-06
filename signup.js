// const form = document.querySelector('#form')
// const username = document.querySelector('#username').value;
// const password = document.querySelector('#password').value;

const validateForm = ()=>{
    const profileObj = {username:'',password:''}
    if(username!=='' && password!==''){
        profileObj.username = document.getElementById("username").value;
        profileObj.password = document.getElementById("password").value;
        localStorage.setItem("profileDetails",JSON.stringify(profileObj));
        window.location.href="Home.html";  
    }else{
        return
    }
}



