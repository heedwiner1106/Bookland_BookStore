// signup

var formSignup = document.querySelector('#signupForm');

var createUser = async (e) => {
    console.log("submit");
    const data = {
      account: formSignup.account.value,
      password: formSignup.password.value,
      admin: false
    }
    await fetch('http://localhost:3000/accounts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json'}
    })
}
// formSignup.addEventListener('submit',validateSignup);
// $(document).ready(function(){
//     createUserr();
//     console.log("abce");
// })


function validateSignup(e){

    if(Array.from(document.signupForm.account.value).length < 8 || !/[a-z]/i.test(Array.from(document.signupForm.account.value)[0])){
        alert("Please choose another account. Account must be longer than 8 characters and start with the letter.");
        document.signupForm.account.focus();
        return false;
    }
    for(let i = 1;i<Array.from(document.signupForm.account.value).length;i++){
        if(!/[A-Za-z]|[0-9]|_|@|./.test(Array.from(document.signupForm.account.value)[i])){
            alert("Please choose another account. Account cannot contain special characters.");
            document.signupForm.account.focus();
            break;
            return false;
        }
    }
    if(Array.from(document.signupForm.password.value).length < 6){
        alert("Please choose another password. Account must be longer than 6 characters.");
        document.signupForm.password.focus();
        return false;
    }
    if(document.signupForm.confirmpassword.value != document.signupForm.password.value){
        alert("Confirm password fail.");
        document.signupForm.confirmpassword.focus();
        return false;
    }
    else{
        var a = 1;
    $.ajax({
        url: "http://localhost:3000/accounts",
        type: 'GET',
        dataType: 'json',
        success:function(data){
            if(check(data) == 0) {
                alert("Account already exists");
                window.history.back();
                return false;
            }else{
                createUser();
                alert("Signup success");
                return true;
            }
        },
        error: function(){
            alert("Wrong");
            return false;
        }
    })
    // if(!a) return false;
    // else {
    //     window.location.href = './login.html';
    // }
    }
}
function check(data){
    var val = 1;
    console.log("length: "+data.length);
    for(let i = 0; i< data.length;i++){
        if(document.signupForm.account.value == data[i].account){
            console.log(document.signupForm.account.value);
            console.log(data[i].account);
            val = 0;
            break;
        }
    }
    console.log("val: "+val);
    return val;
}