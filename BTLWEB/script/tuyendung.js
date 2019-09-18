/*cuộn trang menu*/
$(document).ready(init);
function init(){
	$(window).scroll(cuon_trang);
}
function cuon_trang(){
	if($(this).scrollTop()>150){
    $(".header2").show();
	}else{
    $(".header2").hide();
    }
}
/*menu_response*/
function goi_menu(){
	var menu = document.getElementById('menus');
	menu.style.display = "block";
	}
function dong_menu(){
	var menu = document.getElementById('menus');
	menu.style.display = "none";
	}
/*chuyen_ve*/
$(document).ready(init2);
function init2(){
	$(window).scroll(hien_ve_dau_trang);
	}
function hien_ve_dau_trang(){
if ($(this).scrollTop() > 200) $(".chuyen_ve_dau_trang").fadeIn();
else $(".chuyen_ve_dau_trang").fadeOut();
}
$(".chuyen_ve_dau_trang").click(ve_dau_trang);
function ve_dau_trang() {
$("body,html").animate({scrollTop: 0}, "slow");
}
