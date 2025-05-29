
window.addEventListener('scroll', function() {
    var targetDiv = document.getElementById('avt_page_110823');
    var rect = targetDiv.getBoundingClientRect();
    if (rect.top <= 0) {
        jQuery("#header_110823, .tg_collapse_mnt").addClass("tg_active");
    } else {
        jQuery("#header_110823 , .tg_collapse_mnt").removeClass("tg_active");
        jQuery("#header_110823 , .tg_collapse_mnt").removeClass("tg_impt");
    }
});
jQuery(".tg_collapse_mnt").click(function() {
    jQuery("#header_110823").toggleClass("tg_impt");
    jQuery(this).toggleClass("tg_impt");
});


//   menu moblie  
var estado = 0,
    vw = $(window).width();
$("#hamburger").click(function() {
  var delay_time = 0;
  $(this).toggleClass('open');
  console.log(estado);
  
});
$(document).ready(function(){
	$("#hamburger").click(function(){
		$("#menu-mobile").toggle();
	})
	$("#menu-mobile li").click(function(){
		$("#menu-mobile").hide();
		$("#hamburger").removeClass('open');
	})
})
//   menu moblie 