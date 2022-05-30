<?php

namespace configBlockEditor;

//if ( ! defined( 'ABSPATH' ) ) exit;

function editor_assets() {
  $module_basename = 'config-block-editor';
  $module_directory_path = dirname( __FILE__ );
  $module_directory_uri = strpos($module_directory_path,'/themes/') ? get_stylesheet_directory_uri().'/modules/'.$module_basename : WP_CONTENT_URL.'/modules/'.$module_basename;

  wp_enqueue_script(
    $module_basename,
    $module_directory_uri. '/build/index.js',
    [ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ],
    filemtime($module_directory_path. '/build/index.js'),
    true
  );
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\editor_assets' );

add_filter('wp_calculate_image_sizes', function($sizes){
  return '200vw';
});
