function showSpecBill(event) {
  $(".show_hide_order").addClass("d_none");
  $("." + event).removeClass("d_none");
}



// footer menu navigation controlls 
function activeHome() {
  $(".common_section").addClass("d_none");
  $(".home_page").removeClass("d_none");
  $("body").css("backgroundColor", "#fff");

  $(".footer_menu").removeClass("active");
  $(".footer_home").addClass("active");

  $("#last_clicked").val("footer_home");
}


function activeBillPage() {
  $(".common_section").addClass("d_none");
  $(".billing_page").removeClass("d_none");
  $("body").css("backgroundColor", "#f7f4f4");

  $(".footer_menu").removeClass("active");
  $(".footer_bill").addClass("active");

  $("#last_clicked").val("footer_bill");

  $(".spacer_catagory").removeClass("spacer_active_catagory");
  $("#secondFixedDiv").removeClass("secondFixed");
  $("#catagories_nav").scrollLeft(0);
}


function activeOrders() {
  $(".common_section").addClass("d_none");
  $(".order_page").removeClass("d_none");
  $("body").css("backgroundColor", "#f7f4f4");

  $(".footer_menu").removeClass("active");
  $(".footer_order").addClass("active");

  $("#last_clicked").val("footer_order");

  $(".spacer_catagory").removeClass("spacer_active_catagory");
  $("#secondFixedDiv").removeClass("secondFixed");
  $("#catagories_nav").scrollLeft(0);
}


function activeLeftMenu() {
  $(".service_menu").addClass("show_menu");
  $(".service_menu").removeClass("d_none");

  $(".footer_menu").removeClass("active");
  $(".footer_service").addClass("active");

  $(".dim_dark").removeClass("d_none");
}

function closeMenu() {
  $(".service_menu").removeClass("show_menu");

  $(".footer_menu").removeClass("active");
  var inpVal = $("#last_clicked").val();
  $("." + inpVal).addClass("active");

  $(".dim_dark").addClass("d_none");
}


$(".common_menu_item").click(function () {
  closeMenu();
});

$(".dim_dark").click(function () {
  closeMenu();
  crossCart();
});


function addOrder() {
  crossCart();
}



// activating the add to cart popup 
function crossCart() {
  $("#item_cart").addClass("d_none");
  $(".dim_dark").addClass("d_none");
  $(".cart_val").html("1");
}

// cat_img 


function addToCart(cart_name) {
  $("#item_cart").removeClass("d_none");
  $(".dim_dark").removeClass("d_none");

  var source = $("." + cart_name + " .image .cat_img").attr('src');
  var product_name = $("." + cart_name + " .name_n_price .name").html();
  var product_price = $("." + cart_name + " .name_n_price .price .prdct_price").html();
  var product_total_num = $("." + cart_name + " .thisElmntVal").val();
  // console.log(product_total_num);
  // console.log(source +" : " + product_name + " : " + product_price);

  $(".item_name").html(product_name);
  $(".item_price, .cart_price").html(product_price);
  $('.cartImg').attr('src', source);
  $('.cart_val').html(product_total_num);
  $('.popped_up_loc').val("." + cart_name + " .thisElmntVal");



  // for adding top pixel size in popup box which will be a responsive top size 
  var height_body = document.querySelector("body").offsetHeight;
  var item_cart_hght = document.querySelector("#item_cart").offsetHeight;
  var top_var = ((height_body - item_cart_hght) / 2);
  $("#item_cart").css("top", top_var + "px");

  // console.log(height_body + " : " + item_cart_hght + " : " + top_var);



}




// plus minus controls 

//plus minus of product popup 
$(".cart_plus").click(function () {
  var curVal = $(".cart_val").html();
  curVal = (parseInt(curVal) + 1);
  $(".cart_val").html(curVal);
  let location = $(".popped_up_loc").val();
  $(location).val(curVal);

  // increment to db 
});


$(".cart_minus").click(function () {
  var curVal = $(".cart_val").html();
  curVal = (parseInt(curVal) - 1);
  if (curVal >= 1) {
    $(".cart_val").html(curVal);
    let location = $(".popped_up_loc").val();
    $(location).val(curVal);

    // decrement to db 
  }
});






// plus minus of order page 
$(".add_btn").click(function () {
  var curVal = $(".spec_order_num").html();
  curVal = parseInt(curVal);
  $(".spec_order_num").html(curVal + 1);
});


$(".rmv_btn").click(function () {
  var curVal = $(".spec_order_num").html();
  curVal = parseInt(curVal);
  if (curVal > 1) {
    $(".spec_order_num").html(curVal - 1);
  }
});























// ajax get requests and fetch data and show!... 

// onload data fetch and show 
$.ajax({
  url: "ajax/cat_nav.html",
  type: 'GET',
  success: function (data) {
    $("#catagories_nav").html(data);
  }
});



$.ajax({
  url: "ajax/catagory_items.html",
  type: 'GET',
  success: function (data) {
    $("#catagory_all_items").html(data);
  }
});






// by functions data fetch and show 


function dranken(event) {
  // $("#catagories_nav").html(" ");
  // $("#catagory_all_items").html(" ");


  $(".common_btn").removeClass("activated");
  $("." + event).addClass("activated");


  if (event == "cmn_btn_draken") {
    $.ajax({
      url: "ajax/cat_nav.html",
      type: 'GET',
      success: function (data) {
        $("#catagories_nav").html(data);

        //  this fun ction is for start changed menu from the start 
        var scndDivHght = document.getElementById("secondFixedDiv").offsetHeight;
        var brandDivHght = document.getElementById("brand").offsetHeight;
        var catagoryDivHght = document.getElementById("catagories_nav").offsetHeight;
        var timeHolderHght = document.getElementById("timeHolder").offsetHeight;
        var totalHght = (scndDivHght + brandDivHght + catagoryDivHght + timeHolderHght);
        if ($("#secondFixedDiv").hasClass("secondFixed")) {
          $("body").animate({ scrollTop: totalHght + 20 }, 15);
        }


      }
    });



    $.ajax({
      url: "ajax/catagory_items.html",
      type: 'GET',
      success: function (data) {
        $("#catagory_all_items").html(data);
      }
    });

  }



  if (event == "cmn_btn_desert") {
    $.ajax({
      url: "ajax/dsrt_cat_nav.html",
      type: 'GET',
      success: function (data) {
        $("#catagories_nav").html(data);

         //  this fun ction is for start changed menu from the start 
         var scndDivHght = document.getElementById("secondFixedDiv").offsetHeight;
         var brandDivHght = document.getElementById("brand").offsetHeight;
         var catagoryDivHght = document.getElementById("catagories_nav").offsetHeight;
         var timeHolderHght = document.getElementById("timeHolder").offsetHeight;
         var totalHght = (scndDivHght + brandDivHght + catagoryDivHght + timeHolderHght);
         if ($("#secondFixedDiv").hasClass("secondFixed")) {
           $("body").animate({ scrollTop: totalHght + 20 }, 15);
         }

      }
    });



    $.ajax({
      url: "ajax/dsrt_catagory_items.html",
      type: 'GET',
      success: function (data) {
        $("#catagory_all_items").html(data);
      }
    });

  }



  // it's just to show different data to show the ajax working!... 
  // but the root one will be used with post request and remove the if else condition with event 
  // in general you will use only this function or any of the three 
  if (event == "cmn_btn_menu") {

    $.ajax({
      url: "ajax/cmn_cat_nav.html",
      type: 'GET',
      success: function (data) {
        $("#catagories_nav").html(data);

        //  this fun ction is for start changed menu from the start 
        var scndDivHght = document.getElementById("secondFixedDiv").offsetHeight;
        var brandDivHght = document.getElementById("brand").offsetHeight;
        var catagoryDivHght = document.getElementById("catagories_nav").offsetHeight;
        var timeHolderHght = document.getElementById("timeHolder").offsetHeight;
        var totalHght = (scndDivHght + brandDivHght + catagoryDivHght + timeHolderHght);
        if ($("#secondFixedDiv").hasClass("secondFixed")) {
          $("body").animate({ scrollTop: totalHght + 20 }, 15);
        }

      }
    });



    $.ajax({
      url: "ajax/cmn_btn_menu.html",
      type: 'GET',
      success: function (data) {
        $("#catagory_all_items").html(data);
      }
    });

  }

}










// disabled left click 
$(function () {
  $(this).bind("contextmenu", function (e) {
    // e.preventDefault();
    // alert("right Click Disabed");
  });
});


document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === 'u') {
    alert('This is Disabled!');
  }
});





// double click disableing 

// var doubleTouchStartTimestamp = 0;
// document.querySelector("html").addEventListener("touchstart", function(double){
//     var now = +(new Date());
//     if (doubleTouchStartTimestamp + 500 > now){
//         double.preventDefault();
//         console.log("made it single click");
//     };
//     doubleTouchStartTimestamp = now;
// });


document.querySelector("html").addEventListener('dblclick', function(el) {
  el.preventDefault();
});



