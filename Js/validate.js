function validateLogin(){
    if(document.loginForm.account.value == ""){
        alert("Please enter your account");
        document.loginForm.account.focus(); //focus in account-input area
        return false;
    }
    else if(document.loginForm.password.value == ""){
        alert("Please enter your password");
        document.loginForm.password.focus(); //focus in password-input area
        return false;
    }
    else{
        $.ajax({
            url: "http://localhost:3000/accounts",
            type: 'GET',
            // data: {
            //     account: $('#account').val(),
            //     password: $('#password').val()
            // },
            dataType: 'json',
            success:function(data){
                console.log("success");
                if(data[0].admin){
                    $('#loginForm').attr('action','../admin/admin.html');
                    window.location.href = '../admin/admin.html';
                    return true;
                }
                else if(data.length == 0){
                    window.location.href = './login.html';
                    alert("wrong");
                    return false;
                }
                else{
                    window.location.href = './index.html';
                    return true;
                }
            },
            error: function(){
                alert("Wrong");
                return false;
            }
        })
    }
}



// // signup
// var createUser = async (e) => {
//     console.log("submit");
//     e.preventDefault();
//     const data = {
//       account: formSignup.account.value,
//       password: formSignup.password.value,
//       admin: false
//     }
//     await fetch('http://localhost:3000/accounts', {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: { 'Content-Type': 'application/json'}
//     })
//     window.location.replace('/view/login.html');
// }
// var formSignup = document.querySelector('#signupForm');
// formSignup.addEventListener('submit',createUser);



// function validateSignup(){
//     if(Array.from(document.signupForm.account.value).length < 8 || !/[a-z]/i.test(Array.from(document.signupForm.account.value)[0])){
//         alert("Please choose another account. Account must be longer than 8 characters and start with the letter.");
//         document.signupForm.account.focus();
//         return false;
//     }
//     for(let i = 1;i<Array.from(document.signupForm.account.value).length;i++){
//         if(!/[A-Za-z]|[0-9]|_|@|./.test(Array.from(document.signupForm.account.value)[i])){
//             alert("Please choose another account. Account cannot contain special characters.");
//             document.signupForm.account.focus();
//             break;
//             return false;
//         }
//     }
//     if(Array.from(document.signupForm.password.value).length < 6){
//         alert("Please choose another password. Account must be longer than 6 characters.");
//         document.signupForm.password.focus();
//         return false;
//     }
//     if(document.signupForm.confirmpassword.value != document.signupForm.password.value){
//         alert("Confirm password fail.");
//         document.signupForm.confirmpassword.focus();
//         return false;
//     }
//     else{
//     $.ajax({
//         url: "http://localhost:3000/accounts",
//         type: 'GET',
//         // data: JSON.stringify({
//         //     account: $('#account').val(),
//         //     password: $('#password').val()
//         // }),
//         dataType: 'json',
//         success:function(data){
//             console.log(data.length);
//             for(let i = 0; i< data.length;i++){
//                 if(document.signupForm.account.value == data[i].account){
//                     alert("Account already exists!");
//                     return false;
//                     break;
//                 } 
//                 else{
//                     formSignup.addEventListener('submit',createUser);
//                 }
//             }
//         },
//         error: function(){
//             alert("Wrong");
//             return false;
//         }
//     })
//     }
// }
