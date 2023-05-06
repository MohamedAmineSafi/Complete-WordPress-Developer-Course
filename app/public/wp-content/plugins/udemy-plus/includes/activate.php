<?php

function up_activate_plugin()
{
    if (version_compare(get_bloginfo('version'), '5.9', '<')) {
        wp_die(__('You must update WP', 'udemy-plus'));
    }
}