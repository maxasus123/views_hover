<?php

/**
 * @file
 */

/**
 * Implements hook_views_data_alter().
 *
 * Register our tooltip field.
 */
function views_hover_views_data_alter(&$data) {
  $data['views']['hover'] = array(
    'title' => t('Hover field'),
    'help' => t('Displays a field with a hover.'),
    'field' => array(
      'handler' => 'views_hover_handler_field_hover',
    ),
  );
}
