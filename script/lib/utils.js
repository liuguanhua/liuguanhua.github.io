/* (function($) {
	$.fn.extend({
		funBeat: function(options) {
			options = $.extend({
				obj: null,
				time: 0.2
			}, options);
			var $a = [],
				$this = $(this),
				$eLen = $this.text().split('').length;
			for(var i = 0; i < $eLen; i++) {
				$a.push("<span>" + $this.text().split('')[i] + "</span>");
			}
			$this.text('');
			$this.append($a);
			for(var n = 0; n < $eLen; n++) {
				$this.find("span").eq(n).addClass("beat").css({
					//					"-webkit-animation-delay":n * options.time + "s"
					"animation-delay": n * options.time + "s"
				});
			}
		}
	});
})(jQuery); */

const funBeat=function(el){
	const options = {
		obj: null,
		time: 0.2
	};
	var $a = [],
		$this = el,
		$eLen = $this.text().split('').length;
	for(var i = 0; i < $eLen; i++) {
		$a.push("<span>" + $this.text().split('')[i] + "</span>");
	}
	$this.text('');
	$this.append($a);
	for(var n = 0; n < $eLen; n++) {
		$this.find("span").eq(n).addClass("beat").css({
			//					"-webkit-animation-delay":n * options.time + "s"
			"animation-delay": n * options.time + "s"
		});
	}
}
export default funBeat;