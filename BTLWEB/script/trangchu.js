// JavaScript Document
//slide show
var slideIndex;
function showSlide(){
	var i;
	var slides = document.getElementsByClassName("mySlide");
	var dots = document.getElementsByClassName("dot");
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
		}
	for(i=0; i < dots.length; ++i){
		dots[i].className = dots[i].className.replace(" active", "");
		}
	
	slides[slideIndex].style.display = "block";
	dots[slideIndex].className += " active";
	slideIndex++;
	if(slideIndex > slides.length - 1){
		slideIndex = 0;
		}
		setTimeout(showSlide, 7000);
	}
	showSlide(slideIndex = 0);
	function currentSlide(n){
		showSlide(slideIndex = n);
		}
//sanpham
var san_pham_index;
function xem_trang(){
	var i;
	var trang = document.getElementsByClassName("trang");
	var chuyen_trang = document.getElementsByClassName("chuyen_trang");
	for(i =0 ; i < trang.length; i++){
		trang[i].style.display = "none";
		}
	for(i =0 ; i < trang.length; i++){
		chuyen_trang[i].className  = chuyen_trang[i].className.replace(" interact", "");
		}
	trang[san_pham_index].style.display="block";
	chuyen_trang[san_pham_index].className += " interact";
	if(san_pham_index > trang.length - 1){
		san_pham_index = 0;
		}
		setTimeout(xem_trang, 15000);
	}
	xem_trang(san_pham_index = 1);
	function trang_gan_day(n){
		xem_trang(san_pham_index = n);
		}
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
