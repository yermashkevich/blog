// (function($){
//     $(".burger").on("click", function() {
//     	$(".menuPanel").toggleClass("open");
//     });
// })(jQuery);

$(".burger").click(function() {
	$(".menu__bg").toggleClass("open");
	$(this).toggleClass("active");
	$(".overlay").toggleClass("open");
});