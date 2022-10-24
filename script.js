$.scrollify({
  section: ".page",
  scrollSpeed: 2000,
  touchScroll: false,
  offset: 0,
  scrollbars: false,
  setHeights: true,
	overflowScroll: true,
	updateHash: true,
	touchScroll: true

});
$('.link2').click(function(){
	$.scrollify.next();
});

$('.link3').click(function(){
	$.scrollify.move("#3");
});