// ==UserScript==
// @name        dmm
// @namespace   www.dmm.co.jp
// @include     http://www.dmm.co.jp/digital/videoa/*
// @include     http://www.dmm.co.jp/search/*
// @require     http://fancybox.net/js/fancybox-1.3.4/jquery.easing-1.3.pack.js
// @require     http://fancybox.net/js/fancybox-1.3.4/jquery.mousewheel-3.0.4.pack.js
// @require     http://fancybox.net/js/fancybox-1.3.4/jquery.fancybox-1.3.4.js
// @grant       none
// @version     1
// ==/UserScript==

var gallery = [];
$('#list li').each(function(){
  var item = $(this),
      page = item.find('.tmb a').attr('href'),
			title = item.find('.tmb .img img').attr('alt'),
      videoId = page.split('cid=')[1].split('\/')[0],
			imgUrl = 'http:\/\/pics.dmm.co.jp\/digital\/video\/' + videoId + '\/' + videoId + 'pl.jpg',
			content = '<p class="sample2"><a href="javascript:;"><span class="btn-sample2"><span></span></span></a></p>';
	gallery.push({
		href : imgUrl,
		title : title
	});
	item.find('div').first().append(content);
	item.find('.btn-sample2').data('href',imgUrl).data('title',title);
});

$('.d-boxpiclist li').each(function(){
  var item = $(this),
      page = item.find('.d-modtmb a').attr('href'),
			title = item.find('.d-modtmb a').text(),
      videoId = page.split('cid=')[1].split('\/')[0],
			imgUrl = 'http:\/\/pics.dmm.co.jp\/digital\/video\/' + videoId + '\/' + videoId + 'pl.jpg',
      content = '<p class="sample2"><a href="javascript:;"><span class="btn-sample2"><span></span></span></a></p>';
  $(content).appendTo(item);
	item.find('.btn-sample2').data('href',imgUrl).data('title',title);
});

if(gallery.length > 0){
	var listTag = '<a href="javascript:;" id="gallery">G</a>';
	
	$('.list-capt .headwithelem span').first().append(listTag);
    $('#gallery').click(function() {
		$.fancybox(gallery, {
			'padding'			  : 10,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'type'          : 'image',
			'changeFade'    : 0
		});
	});
}

$('.btn-sample2').each(function(index){
	var $this = $(this);
	$this.click(function(e){
		$.fancybox({
			'padding'		    : 10,
			'href'			    : $this.data('href'),
			'title'   		  : $this.data('title'),
			'transitionIn'	: 'none',
			'transitionOut'	: 'none'
		});
	});
});