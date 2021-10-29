$(document).ready(function(){
    var activeUser = localStorage.getItem('activeUser');
    console.log(activeUser);
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
    var href = "../profile/profile.html?id=" + activeUser;
    $('#profile').attr('href',href);
})