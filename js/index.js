
$(function() {
 $('#dowebok').fullpage({
 	scrollingSpeed: 700,
  afterLoad: function(anchorLink, index) {
   $(".list-inline li").removeClass("active");
   $(".list-inline li").eq(index - 1).addClass('active');
   // $("header .menu .line").css({ "width": $("header .menu li").eq(index-1).outerWidth(), "left": parseInt($("header .menu li a").eq(index-1).position().left) - 5 });
   $("header .menu .line").animate({ width: $(".list-inline li").eq(index - 1).width() + 10,
   	left: parseInt($(".list-inline li a").eq(index - 1).position().left) - 5 + "px" }, 300)
  }
 });


 //点击切换显示菜单栏
 $("header .menu-icon span.glyphicon-th-large").bind("click", function() {
  if ($(this).hasClass("active")) {
   $(this).removeClass("active");
   $("header .menu").removeClass("active")
  } else {
   $(this).addClass("active");
   $("header .menu").addClass("active")
  }
 });

 //点击菜单栏跳转到相应的页面
 $(".list-inline li").each(function(index, value) {
  $(value).on('click touchstart', function() {
   $(".list-inline li").removeClass("active");
   $(this).addClass('active');
   $.fn.fullpage.moveTo(index + 1, 0);
  })
 })

 //菜单栏上面的线
 $("header .menu .line").css({ "width": $("header .menu li").eq(0).outerWidth(), "left": parseInt($("header .menu li a").eq(0).position().left) - 5 });
 $("header .menu li a").bind("mouseenter", function() { var line = $("header .menu .line"); if (line.css("display") == "none") { line.show() } line.stop().animate({ width: $(this).width() + 10, left: parseInt($(this).position().left) - 5 + "px" }, 300) });
 $("header .menu").bind("mouseleave", function() { $("header .menu li.active a").trigger("mouseenter") }).trigger("mouseleave");


 //首页下箭头
 $(".movedown").on("click",function(){
 	$.fn.fullpage.moveSectionDown();
 })

 //移动端团队介绍
 TouchSlide({
  slideCell: "#slideBox",
  titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
  mainCell: ".bd ul",
  effect: "leftLoop",
  autoPage: true, //自动分页
  // autoPlay: true //自动播放
 });

 //pc端右侧固定栏
$(".up").on("click",function(){
    $.fn.fullpage.moveSectionUp();
})
$(".down").on("click",function(){
    $.fn.fullpage.moveSectionDown();
})
function dockEvent() {
 $(".dock").height($(".dock ul.icons li").length * 50 + $(".dock a.switch").height() + 20).css("top", ($(window).height() - $(".dock").height()) / 2 + 35);
 $(".dock ul.icons li i").bind("mouseover click touchstart", function() {
  $(".dock ul.icons li").removeClass("active");
  $(this).parent().addClass("active")
 });
 $(".dock ul.icons li").bind("mouseleave", function() { $(".dock ul.icons li").removeClass("active") });
 $(".dock ul.icons li.up i").bind("click touchstart", function() {
  pageIndex--;
  pageSwitching()
 });
 $(".dock ul.icons li.down i").bind("click touchstart", function() {
  pageIndex++;
  pageSwitching()
 });
 $(".dock a.switch").bind("click", function() {
  if ($(this).hasClass("off")) {
   $(".dock").removeClass("close");
   $(this).removeClass("off")
  } else {
   $(".dock ul.icons li").removeClass("active");
   $(".dock").addClass("close");
   $(this).addClass("off")
  }
 })
}
dockEvent();

 //loading
 $(".welcome").animate({"opacity": 0,"zIndex":-1},500);
})