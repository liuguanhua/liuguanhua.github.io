import imagesLoaded from 'imagesloaded'; //防止获取不到图片的高度
const Masonry = require("./lib/masonry.pkgd.min"),
	jQueryBridget = require("./lib/jquery-bridget");
jQueryBridget("masonry", Masonry);
$("#worksBox").imagesLoaded(() => {
	$("#worksBox").masonry({
		itemSelector: ".grid-item"
	});
})