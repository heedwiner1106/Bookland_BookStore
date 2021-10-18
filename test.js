$(document).ready(function(){
    $.ajax({
        url: "http://localhost:3000/accounts",
        type: 'GET',
        // data: JSON.stringify({
        //     account: $('#account').val(),
        //     password: $('#password').val()
        // }),
        dataType: 'json',
        success:function(data){
            console.log(data.length);
            $('#a').append(data[data.length-1].account +" "+ data.length);
        },
        error: function(){
            alert("Wrong");
        }
    })

    $('#btn').click(function(){
        console.log("click");
          $.ajax({
          type: "POST",
          contentType: "application/json",
          url: "http://localhost:3000/accounts",
          data: JSON.stringify(
              {account: 'heedwiner1106',
              password: 'nhiNHOO1106',
              admin: false
          }),
          dataType: 'json',
          success: function (data) {

              console.log("success");

          },
          error: function (e) {

              console.log("failed");

          }
          });
        console.log("click");
    })
})
// $.ajax({
//     url: "http://localhost:3000/accounts",
//     type: 'POST',
//     data: JSON.stringify({
//         account: 'admin1',
//         password: 'adc'
//     }),
//     dataType: 'json',
//     success:function(data){
//         console.log("success");
//         console.log(data);
//     },
//     error: function(){
//         alert("Wrong");
//     }
// })