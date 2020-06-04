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
});

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    // $(".add-anim")[0].offset().top;

    $(".add-anim").each(function(){
        var topDistance = $(this).offset().top;

        if ( (topDistance-250) < scrollTop ) {
            console.log( $(this).text() + ' was scrolled to the top' );
            $(this).addClass("anim");
        }
        else{
            $(this).removeClass("anim")
            $(this).removeClass("anim");
        }
    });
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
            position_top = 0;
        }    
        

        if(right_pos == ""){
            array_virus[index].style.left = (left_pos+.25) + "%";
        }
        else{
            array_virus[index].style.right = (right_pos+.35) + "%";
        }

        array_virus[index].style.top = (position_top+1) + "%";
    }
}