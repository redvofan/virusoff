function changeVideo(url){
    $('#video-youtube-playing').attr("src", url);
}

var array_virus = [];

$(document).ready(function(){
    array_virus.push($("#virus1-img")[0]);
    array_virus.push($("#virus2-img")[0]);
    array_virus.push($("#virus3-img")[0]);
    array_virus.push($("#virus4-img")[0]);
    array_virus.push($("#virus5-img")[0]);
    array_virus.push($("#virus6-img")[0]);

    setInterval(fallVirus,20);

    $(".fadein").animate({     
        width: '90%'
    }, 1100);

    for (let index = 2; index <= 12; index++) {        
        $('#pedido_botellas').append('<option value="'+index+'">'+index+' '+'Piezas</option>');
    }

    $(".navigation-links").click(function(){
        $(".navigation-links").removeClass("visited");
        $(this).addClass("visited");
    });
});

    

    
$(window).scroll(function () {
    if ($(this).scrollTop() > 120) {	        
        $("#puntos-venta1").slideDown("slow", function () {});

    } else {
        $("#puntos-venta1").slideUp("slow", function () {});
    }
    
    // if ($(this).scrollTop() > 870) {
    //     $("#videos").slideDown("slow", function () {});

    // } else {
    //     $("#videos").slideUp("slow", function () {});
    // }
    
    // if ($(this).scrollTop() > 1470) {
    //     $("#mapa").slideDown("slow", function () {});

    // } else {
    //     $("#mapa").slideUp("slow", function () {});
    // }

    // if ($(this).scrollTop() > 2170) {
    //     $("#contacto").slideDown("slow", function () {});

    // } else {
    //     $("#contacto").slideUp("slow", function () {});
    // }
    
    if ($(this).scrollTop() > 2850) {
        $("#promocion").slideDown("slow", function () {});

    } else {
        $("#promocion").slideUp("slow", function () {});
    }

});






function fallVirus(){
    for (let index = 0; index < array_virus.length; index++) {
        let position_top = array_virus[index].style.top.replace("%","");
        position_top = position_top*1;

        let right_pos = array_virus[index].style.right.replace("%","");
        let left_pos = array_virus[index].style.left.replace("%","");

        if(right_pos != ""){
            right_pos = right_pos*1
            if(right_pos > 100){
                right_pos = 1;
            }
        }
        if(left_pos != ""){
            left_pos = left_pos*1
            if(left_pos > 100){
                left_pos = 1;
            }
        }

        if(position_top > 100){
            position_top = -50;
        }    
        

        if(right_pos == ""){
            array_virus[index].style.left = (left_pos+.08) + "%";
        }
        else{
            array_virus[index].style.right = (right_pos+.15) + "%";
        }

        array_virus[index].style.top = (position_top+0.3) + "%";
    }
}