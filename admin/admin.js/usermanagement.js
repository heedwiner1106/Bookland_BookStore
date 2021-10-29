$(document).ready(function(){
    $.ajax({
        url: "http://localhost:3000/accounts",
        type: 'GET',
        dataType: 'json',
        success:function(data){
            console.log("success");
            for(let i = 0; i < data.length;i++){
                $('.usertable').append('<div class="list"><p class="account">'+data[i].account
                +'</p><p class="password">'+data[i].password+'</p><p class="role">'+data[i].admin
                +'</p><a class="seedetail btn" href="http://127.0.0.1:5502/profile/profile.html?id='+data[i].id+'"><i class="fas fa-info-circle fa-2x"></i></a><button class="update btn"><i class="fas fa-wrench fa-2x"></i></button><button class="delete btn"><i class="fas fa-user-slash fa-2x"></i></button><button class="btnmobile" ><i class="fas fa-chevron-down fa-2x"></i></button><div class="nav-btn-mobile" id="a"><a class="seedetail" href="http://127.0.0.1:5502/test.html?id='+data[i].id+'"><i class="fas fa-info-circle fa-2x"></i></a><button class="update"><i class="fas fa-wrench fa-2x"></i></button><button class="delete"><i class="fas fa-user-slash fa-2x"></i></button></div></div>');
            }
            $('.btnmobile').click(function(){
                $(this).next().toggleClass('showbtn');
            })
        },
        error: function(){
            alert("Wrong");
            return false;
        }
    })
});
