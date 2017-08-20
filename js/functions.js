
  var $li = $('.img-list').find('> li'),
      $links = $li.find('> a'),
      $lightbox = $('.lightbox'),
      $next = $('.next'),
      $prev = $('.prev'),
      $overlay = $('.overlay'),
      liIndex,
      targetImg;
  


  $links.click(function(e) {
    e.preventDefault();
    liIndex = $(this).parent().index();
    targetImg = $(this).attr('href');
    $lightbox.find('.image_slide').attr('src', targetImg)
    $lightbox.fadeIn(500);
  });


$overlay.click(function() {
	$('.lightbox').fadeOut(
		)
});

$next.click(function() {
	if((liIndex + 1) < $li.length ){
		targetImg = $li.eq(liIndex + 1).find('> a').attr('href');
		liIndex ++;

	} else{
		targetImg = $li.eq(0).find('> a').attr('href');
		liIndex = 0;
	}
	 $lightbox.find('.image_slide').attr('src', targetImg)
});

$prev.click(function() {
	if(liIndex > 0){
		targetImg = $li.eq(liIndex - 1).find('> a').attr('href');
		liIndex --;

	} else{
		targetImg = $li.eq(liIndex - 1).find('> a').attr('href');
		liIndex = 11;
	}
	 $lightbox.find('.image_slide').attr('src', targetImg)
})


