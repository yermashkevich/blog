// (function($){
//     $(".burger").on("click", function() {
//     	$(".menuPanel").toggleClass("open");
//     });
// })(jQuery);

$(".burger").click(function() {
	$(".menuPanel").toggleClass("open");
	$(this).toggleClass("active");
});