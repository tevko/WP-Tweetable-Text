
//creates a twitter button that will add a highlighted twitter string to a post

(function() {
    tinymce.PluginManager.add('add_tweet_button', function( editor, url ) {
        editor.addButton( 'add_tweet_button', {
            title: 'Twitter Highlight',
            type: 'menubutton',
            icon: 'dashicons-twitter',
            menu: [
				{
					text: 'Insert Twitter Content',
					value: 'Insert Twitter Content',
					onclick: function() {
						var h = tinyMCE.activeEditor.selection.getContent({format : 'text'});
					    editor.windowManager.open( {
					        title: 'Insert Twitter Content',
					        body: [{
					            type: 'textbox',
					            name: 'twContent'
					        }],
					        onsubmit: function( e ) {
					        	if (e.data.twContent == '') {
					        		editor.insertContent(h);
					        	} else {
					        		editor.insertContent(' ');
					        		editor.insertContent('<span class="twitterHighlight"' + 'data-tweet="' + e.data.twContent + '"' + '>' + h + '</span>');
					        	}
					        }
					    });
					}
				}
			]
        });
    });
})();
