

$(document).ready(function(){
    const id = new URLSearchParams(window.location.search).get('id');
    var activeUser = localStorage.getItem('activeUser');
    var isadmin = false;
    var account;
    if(activeUser) {
        $('.not-login').hide();
        $('.logged').show();
    }
    else {
        $('.nav_button button').show();
        $('.logged').hide();
    }
    $('#logout').click(function(){
        localStorage.removeItem('activeUser');
    })
    if(activeUser){
        $.ajax({
            url: "http://localhost:3000/accounts",
            type: 'GET',
            data:{
                id: activeUser
            },
            dataType: 'json',
            success:function(data){
                console.log("success admin")
                if(data[0].admin){
                    isadmin = true;
                }
            },
            error: function(){
                alert("Wrong");
            }
        })
    }
    $.ajax({
        url: "http://localhost:3000/accounts/"+id,
        type: 'GET',
        dataType: 'json',
        success:function(data){
            console.log("success accounts");
            if(id == activeUser || isadmin){
                $('input').prop('disabled', false);
            }
            else $('input').prop('disabled', true);
            $('#account').val(data.account);
            $('#password').val(data.password);
            $('#account').prop('disabled', true);
            $('#password').prop('disabled', true);
            account = $('#account').val();
            $.ajax({
                url: "http://localhost:3000/profiles",
                type: 'GET',
                data:{
                    account: account
                },
                dataType: 'json',
                success:function(data){
                    console.log("success profile");
                    if(data.length > 0){
                        console.log(data[0].name);
                        var newdb = data[0];
                        $('#name').val(newdb.name);
                        $('#year').val(newdb.year);
                        $('#gmail').val(newdb.gmail);
                        $('#img').attr('src',newdb.avatar);
                        $('title').append(newdb.name)
                    }
                    else console.log("Have not entered information!");
                },
                error: function(){
                    alert("Wrong 3000");
                }
            })
        },
        error: function(){
            alert("Wrong");
        }
    })
    $('.a').click(function(){
        console.log(account);
        var name = $('#name').val();
        var year = $('#year').val();
        var gmail = $('#gmail').val();
        var avatar = $('#avatar').val();
        console.log(name + year + gmail + avatar);
        alert("a");
        $.ajax({
            url: "http://localhost:3000/profiles",
            type: 'POST',
            data: {
                name: name,
                year: year,
                gmail: gmail,
                avatar: avatar,
                account: account 
            },
            dataType: 'json',
            success:function(data){
                console.log("Update success")
            },
            error: function(){
                alert("Wrong");
            }
        })
    })
})