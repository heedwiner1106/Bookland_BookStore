// $(document).ready(function(){
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
//             $('#a').append(data[data.length-1].account +" "+ data.length);
//         },
//         error: function(){
//             alert("Wrong");
//         }
//     })

//     function validateLogin(e){
//         if(document.loginForm.account.value == ""){
//             alert("Please enter your account");
//             document.loginForm.account.focus(); //focus in account-input area
//             return false;
//         }
//         if(document.loginForm.password.value == ""){
//             alert("Please enter your password");
//             document.loginForm.password.focus(); //focus in password-input area
//             return false;
//         }
//         else{
//             $.ajax({
//                 url: "http://localhost:3000/accounts",
//                 type: 'GET',
//                 data: {
//                     account: $('#account').val(),
//                     password: $('#password').val()
//                 },
//                 dataType: 'json',
//                 success:function(data){
//                     console.log("success");
//                     console.log(data[0].account + data[0].password + data[0].admin + data.length);
//                     if(data.length > 0){
//                         if(data[0].admin){
//                             //$('#loginForm').attr('action','../admin/admin.html');
//                             window.location.href = '../admin/admin.html';
//                         }
//                         else{
//                             $('#loginForm').attr('action','../index.html');
//                             window.location.href = './index.html';
//                         }
//                         return true;
//                     }
//                     else{
//                         e.preventDefault();
//                         alert("Wrong account or password!");
//                         // $('#loginForm').attr('action','../index.html');
//                         // window.location.href = './index.html';
//                         return false;
//                     }
//                 },
//                 error: function(){
//                     alert("Wrong");
//                     return false;
//                 }
//             })
//         }
//     }
// // $.ajax({
// //     url: "http://localhost:3000/accounts",
// //     type: 'POST',
// //     data: JSON.stringify({
// //         account: 'admin1',
// //         password: 'adc'
// //     }),
// //     dataType: 'json',
// //     success:function(data){
// //         console.log("success");
// //         console.log(data);
// //     },
// //     error: function(){
// //         alert("Wrong");
// //     }
// })

// section Storage
// link web cj
const id = new URLSearchParams(window.location.search).get('id');
console.log(id);
$.ajax({
    url: "http://localhost:3000/accounts/",
    type: 'GET',
    dataType: 'json',
    success:function(data){
        console.log("success");
        console.log(data.id);
    },
    error: function(){
        alert("Wrong");
    }
})