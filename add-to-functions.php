<?php 
//add tweet button to tinyMCE editor

add_action('admin_head', 'add_tweet_button');

function add_tweet_button() {
	global $typenow;
	if ( get_user_option('rich_editing') == 'true') {
		add_filter('mce_external_plugins', 'add_tinymceTweet_plugin');
		add_filter('mce_buttons', 'register_tweet_button');
	}
}

function add_tinymceTweet_plugin($plugin_array) {
	$plugin_array['add_tweet_button'] = get_template_directory_uri() . '/wp-tweetable-text/editor-tweet-button.js';
	return $plugin_array;
}

function register_tweet_button($buttons) {
	array_push($buttons, 'add_tweet_button');
	return $buttons;
}

//add icon and appropriate styles

add_action( 'admin_enqueue_scripts', 'stylesheet_to_admin' );

add_editor_style( 'THEME LOCATION/styles.css' );

function stylesheet_to_admin() {
	wp_enqueue_style( 'custom-mce-style', get_template_directory_uri() . '/wp-tweetable-text/styles.css' );
}

?>