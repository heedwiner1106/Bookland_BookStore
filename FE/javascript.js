function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
//su dung this
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show1");
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}

function openmenu() {
  document.getElementById("menu-mobile").classList.toggle("Open");
}

(() =>{
  let tagmenu = document.querySelector(".tabMenu");
  let content = document.querySelector(".content");
  let contentitems = document.querySelectorAll(".content-item");
  console.log(contentitems);
  console.log(tagmenu);
   tagmenu.addEventListener("click", (event)=>{
     if(event.target.classList.contains("tag-menu") &&
      !event.target.classList.contains("active")) {
      tagmenu.querySelector(".active").classList.remove("active");
      event.target.classList.add("active")
      const target = event.target.getAttribute("data-target");
      console.log(target);
      contentitems.forEach((item) => {
       if(target === item.getAttribute("data-category")) {
         item.classList.remove("hide");
         item.classList.add("show");
       }
       else {
        item.classList.remove("show");
        item.classList.add("hide");
       }
      });

      }

   });

})();


$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      }
  });
});
