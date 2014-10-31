(function() {
	var wpt = window.wpt = window.wpt || {};
	wpt.TweetHighlight = {
		init: function() {
			var s = this.settings;
			Array.prototype.forEach.call(document.querySelectorAll('.twitterHighlight'), function(el, i){
				var thisEl = el,
					content = thisEl.textContent,
					tweet = thisEl.getAttribute('data-tweet'),
					filteredTweet = tweet.replace(/#/g, '%23');
					template = '<a target=_blank href="http://twitter.com/share?text=' + filteredTweet + '">' + content + '</a>',
					link = thisEl.innerHTML= template,
					href = 'http://twitter.com/share?text="' + filteredTweet + '"';
				thisEl.addEventListener('click', function(e) {
					e.preventDefault();
					n = window.open(link, 'name', 'height=450, width=750');
					n.focus();
				});
			});
		}
	};

	wpt.TweetHighlight.init();
})();