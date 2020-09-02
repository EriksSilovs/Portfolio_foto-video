
$(document).ready (function () {

    $("figure").each(function (i) {

     $(this).append("<img src=' img/"+(++i)+" .jpg'  />");


    });


});