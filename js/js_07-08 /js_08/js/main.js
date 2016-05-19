$('.popup').hide();

$el = $(':text');
    $el.mouseover (
        function(){
        $(this).siblings('.popup').fadeIn(300);
        });
    $el.mouseout (
        function(){
            $(this).siblings('.popup').fadeOut(300);
        });


$("button").click(function(){
    $("p").show(500);
});