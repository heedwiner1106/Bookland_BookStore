function validateLogin(e){
    var isvalidate = true;
    if(document.loginForm.account.value == ""){
        alert("Please enter your account");
        document.loginForm.account.focus(); //focus in account-input area
        isvalidate = false;
    }
    else if(document.loginForm.password.value == ""){
        alert("Please enter your password");
        document.loginForm.password.focus(); //focus in password-input area
        isvalidate = false;
    }
    else{
        $.ajax({
            url: "http://localhost:3000/accounts",
            type: 'GET',
            data: {
                account: $('#account').val(),
                password: $('#password').val()
            },
            dataType: 'json',
            success:function(data){
                console.log("success");
                console.log(data[0].account + data[0].password + data[0].admin + data.length);
                if(data.length > 0){
                    if(data[0].admin){
                        alert("admin");
                        window.location.href = '../admin/admin.html';
                        localStorage.setItem('activeUser',data[0].id);
                    }
                    else{
                        $('#loginForm').attr('action','../index.html');
                        window.location.href = './index.html';
                        localStorage.setItem('activeUser',data[0].id);
                    }
                }
                else{
                    alert("Wrong account or password!");
                    e.preventDefault();
                }
            },
            error: function(){
                alert("Wrong");
                isvalidate = false;
                return isvalidate;
            }
        })
    }
    if(!isvalidate) e.preventDefault();
}

$(document).ready(function(){
    $('#loginForm').submit(validateLogin);
    var activeUser = localStorage.getItem('activeUser');
    console.log(activeUser);
    if(activeUser) window.location.href = './index.html';
})