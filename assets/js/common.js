function click(e) {
    e.preventDefault();
    e.stopPropagation();    
}


function mdown(event) {
    event.preventDefault();
    event.stopPropagation();
}


function mover(comp) {
    $(".mouseclss").slideUp();
    $(comp).next().slideDown();
}

function mout() {
    //$(comp).children('ul').hide();
    $(".mouseclss").slideUp();
    $("#navbarResponsive").hide();
}              

$(document).ready(() => {
    $('#menuButton').on("click", function (e) {
        if($("#navbarResponsive").is(":visible")) {
            $("#navbarResponsive").slideUp();
        } else {
            $("#navbarResponsive").slideDown();
        }
    });
});
