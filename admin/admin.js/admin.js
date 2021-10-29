$(document).ready(function(){
    var activeUser = localStorage.getItem('activeUser');
    if(activeUser){
        $.ajax({
            url: "http://localhost:3000/accounts/"+activeUser,
            type: 'GET',
            dataType: 'json',
            success:function(data){
                console.log("success");
                console.log(data.account);
                if(!data.admin) {
                    $('body').html('You are not Admin');
                }
            },
            error: function(){
                alert("Wrong");
            }
        })
    }
    else{
        $('body').html('You are not Admin');
    }
    $('#logout').click(function(){
        localStorage.removeItem('activeUser');
    })
})